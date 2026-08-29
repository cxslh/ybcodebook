---
title: Apache Fesod：FastExcel工具库的迭代演进
permalink: /fesodexcel
---

> 
> 背景：曾经广泛使用的阿里 EasyExcel 停止维护，经历 FastExcel 过渡，项目最终捐赠给 Apache 基金会，孵化更名为 Apache Fesod，成为 Java Excel 处理的新一代主流选择。


> 
> 项目地址：github.com/apache/fesod
> 官网地址：fesod.apache.org
> 迁移文档：[https://fesod.apache.org/docs/migration/from-fastexcel/](https://fesod.apache.org/docs/migration/from-fastexcel/)


## 一、库的演进历程：EasyExcel → FastExcel → Apache Fesod

Java生态中大名鼎鼎的Excel处理库，经历了一年时间的三次身份变更：

1. **2024年底**：阿里宣布 EasyExcel 停止维护，这个使用5年的热门项目正式进入不再迭代状态。
2. **2024‑2025年**：原作者离开阿里后推出 FastExcel，API完全兼容 EasyExcel，仅修改导入包即可完成切换，降低项目迁移成本。
3. **2025‑2026年**：FastExcel整体捐赠给Apache软件基金会，项目正式更名为 **Apache Fesod(Incubating，孵化器阶段)**，`2.0.1‑incubating` 版本于2026‑02‑11发布。

> 
> 重点：这次不是新项目重构，而是项目归属变更。代码由Apache基金会托管，和POI、Tomcat一样由社区共同维护，不再受单一公司、个人离职变动影响，解决开源项目突然停更的痛点。对于存量项目，它是迁移成本最低的继任方案。

## 二、主流Excel处理方案选型参考

结合业务场景做技术选型：

- **新项目开发**：直接使用 Apache Fesod，避免后续二次迁移。
- **存量 EasyExcel / FastExcel 项目**：迁移至 Fesod，API高度兼容。
- **简单少量Excel操作**：直接使用 Hutool工具类，无需引入重型组件。
- **需要Excel转PDF能力**：Fesod内置该功能，注意第三方PDF库许可协议风险。

## 三、三大典型业务使用场景

### 场景1：百万级大数据报表导出

财务、风控系统导出大批量业务数据，如果直接使用原生POI极易出现OOM内存溢出。
Fesod采用流式写入，配合数据库分页查询，边查询边写入Excel，内存可以稳定维持在百MB级别。核心思路：分页查询数据库，分批写入输出流，不用一次性加载全部数据到内存。

### 场景2：大Excel文件上传，批量入库

用户上传上万行Excel文件，一次性读取全部数据会撑爆内存；逐行插入数据库性能又很差。
借助`AnalysisEventListener`事件监听器，设置批次阈值，读取到指定行数就批量插入数据库，之后清空缓冲区，循环处理，兼顾内存安全与数据库写入性能。

### 场景3：Excel转PDF（合同、工资单归档打印）

可以直接调用工具方法将Excel文件转换PDF，用于合同、工资单归档打印。

> 
> ⚠️注意：底层依赖iText‑pdf，iText7+使用AGPL协议。商业闭源项目需要购买商业授权；也可以替换为OpenPDF等合规库规避许可问题。

## 四、Apache Fesod快速接入三步法

### 1. 引入Maven依赖

注意groupId为Apache全新坐标，和EasyExcel、FastExcel坐标完全不一样。

```
<dependency>
    <groupId>org.apache.fesod</groupId>
    <artifactId>fesod-sheet</artifactId>
    <version>2.0.1-incubating</version>
</dependency>
```

### 2. 定义Excel映射实体类

使用`@ExcelProperty`注解完成实体字段和Excel表头映射。

```
import org.apache.fesod.sheet.annotation.ExcelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class User {
    @ExcelProperty("编号")
    private Integer id;
    @ExcelProperty("名字")
    private String name;
    @ExcelProperty("年龄")
    private Integer age;
}
```

### 3. 编写读取监听器

流式读取核心依赖监听器。**生产环境切忌把全部数据存放在List中，大文件会OOM，需要设置阈值分批处理**。

```
import org.apache.fesod.sheet.context.AnalysisContext;
import org.apache.fesod.sheet.event.AnalysisEventListener;
import java.util.ArrayList;
import java.util.List;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class BaseExcelListener<T> extends AnalysisEventListener<T> {

    private final List<T> dataList = new ArrayList<>();

    @Override
    public void invoke(T t, AnalysisContext ctx) {
        dataList.add(t);
    }

    @Override
    public void doAfterAllAnalysed(AnalysisContext ctx) {
        log.info("读取完成，共 {} 条", dataList.size());
    }

    public List<T> getDataList() {
        return dataList;
    }
}
```

## 五、核心API示例

### 写入Excel

```
FesodSheet.write(response.getOutputStream(), User.class)
    .sheet("模板")
    .doWrite(buildData());
```

### 读取Excel

```
FesodSheet.read(file.getInputStream(), User.class, listener)
    .sheet()
    .doRead();
```

### SpringBoot 文件上传处理示例

```
@PostMapping("/upload")
public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) {
    if (file.isEmpty()) {
        return ResponseEntity.badRequest().body("请选择文件");
    }
    try {
        BaseExcelListener<User> listener = new BaseExcelListener<>();
        FesodSheet.read(file.getInputStream(), User.class, listener).sheet().doRead();
        log.info("上传 {} 条", listener.getDataList().size());
        return ResponseEntity.ok("处理成功");
    } catch (IOException e) {
        return ResponseEntity.status(500).body("文件处理失败");
    }
}
```

## 六、从 EasyExcel / FastExcel 迁移指南

Fesod上层API基本兼容旧版本，迁移分为4步，每一步完成后执行测试，降低风险：

1. 修改pom.xml：替换maven groupId、artifactId、版本号；
2. IDE全局替换导入包：`com.alibaba.excel` / `cn.idev.excel` 修改为 `org.apache.fesod.sheet`；
3. 修改入口类：将`FastExcel.read()`、`FastExcel.write()`替换为`FesodSheet.read()`、`FesodSheet.write()`；
4. 执行回归测试：验证流式读写、监听器、合并单元格、多sheet等全部业务场景。

> 
> 注解、监听器、ExcelWriter等业务代码无需改动。

## 七、必须注意的4个使用边界

1. **孵化器版本风险**：当前为Apache孵化器版本，API存在小幅调整可能性。建议锁定具体版本号，升级版本前跑完整套回归测试，关注官方更新日志。
2. **内存溢出风险**：监听器不要缓存全部数据，达到批次阈值就要批量落库，清空缓冲区，不能无脑add全部数据到集合。
3. **PDF转换许可协议**：iText AGPL协议坑，商用闭源项目必须获取商业授权，可替换OpenPDF规避法务风险。
4. **依赖冲突**：FastExcel1.x和Fesod2.x不能共存，迁移时必须彻底删除旧的fastexcel依赖，否则会出现类冲突。

## 八、总结

EasyExcel历经FastExcel过渡，最终进入Apache基金会，解决了开源项目受作者、公司变动而突然停止维护的最大痛点。
由Apache基金会保障许可证，社区共同迭代维护，不需要担心项目突然消失。对于Java项目处理大Excel读写场景，Apache Fesod是非常值得考虑的方案。
