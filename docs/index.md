---
layout: doc
aside: false
lastUpdated: false
pageClass: yb-home-page
---


<div class="yb-home">

  <!-- 左侧：站点介绍 -->
  <section class="yb-home-left">
    <img class="yb-logo" src="https://pic1.imgdb.cn/item/6a1c055a6aa5b6be4f5c84c4/logo.png" alt="程序员一博" />
    <h1 class="yb-title">程序员一博</h1>
    <p class="yb-slogan">世界上只有一种真正的英雄主义，就是认清了生活的真相后依然热爱它</p>
    <p class="yb-gzh">微信公众号：程序员一博</p>
  </section>

  <!-- 右侧：最新文章（示例 10 条，日期-链接格式；后续直接改 href 和日期即可） -->
  <aside class="yb-home-right">
    <div class="yb-latest-title">最新文章</div>
    <ul class="yb-latest-list">
      <li><span class="yb-date">2026-08-21</span><span class="yb-sep">-</span><a href="/java/devnotes/javacoden">代码生成器</a></li>
      <li><span class="yb-date">2026-08-12</span><span class="yb-sep">-</span><a href="/java/javaframework/boot/Springbootvalidparam">SpringBoot 如何校验参数</a></li>
      <li><span class="yb-date">2026-07-30</span><span class="yb-sep">-</span><a href="/java/javabase/javapojocovertone">Java Pojo 之间的转换(1)</a></li>
      <li><span class="yb-date">2026-07-18</span><span class="yb-sep">-</span><a href="/db/redis/moretype">Redis 三种特殊数据类型</a></li>
      <li><span class="yb-date">2026-07-02</span><span class="yb-sep">-</span><a href="/java/utils/DateUtils">日期工具类 DateUtils</a></li>
      <li><span class="yb-date">2026-06-25</span><span class="yb-sep">-</span><a href="/java/advanced/classlib">Java 反编译工具</a></li>
      <li><span class="yb-date">2026-06-10</span><span class="yb-sep">-</span><a href="/db/redis/basetype">Redis 五大基本数据类型</a></li>
      <li><span class="yb-date">2026-05-28</span><span class="yb-sep">-</span><a href="/java/javabase/javakey">48 个关键字及 2 个保留字</a></li>
      <li><span class="yb-date">2026-05-15</span><span class="yb-sep">-</span><a href="/java/utils/BigDecimal">BigDecimal 工具类</a></li>
      <li><span class="yb-date">2026-04-30</span><span class="yb-sep">-</span><a href="/java/javabase/1-installjdk">JDK 下载与安装</a></li>
    </ul>
    <div class="yb-more">
      <a href="/timeline">更多文章 →</a>
    </div>
  </aside>

</div>

<style>
/* ===== 首页左右布局（样式只写在本文件内，不影响其他页面） ===== */

/* 首页内容区加宽 */
.yb-home-page .VPDoc .container { max-width: 1180px !important; }
.yb-home-page .VPDoc .content { max-width: 100% !important; }
.yb-home-page .VPDoc .content-container { max-width: 100% !important; }

.yb-home {
  display: flex;
  gap: 48px;
  align-items: flex-start;
  padding: 28px 0 20px;
}

/* ---- 左侧：站点介绍 ---- */
.yb-home-left {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.yb-home .yb-logo {
  width: 112px;
  height: 112px;
  border-radius: 24px;
}

.yb-home .yb-title {
  margin: 32px 0 22px;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.25;
}

.yb-home .yb-slogan {
  max-width: 560px;
  margin: 0 0 32px;
  font-size: 15px;
  line-height: 2;
  color: var(--vp-c-text-2);
}

.yb-home .yb-gzh {
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 9px 20px;
  border-radius: 999px;
  font-size: 13px;
  color: var(--vp-c-brand-1);
}

/* ---- 右侧：最新文章 ---- */
.yb-home-right {
  flex: 0 0 400px;
  width: 400px;
  padding: 22px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background-color: var(--vp-c-bg-soft);
}

.yb-home .yb-latest-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 6px;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.5;
}

.yb-home .yb-latest-title::before {
  content: "";
  width: 4px;
  height: 18px;
  border-radius: 2px;
  background-color: var(--vp-c-brand-1);
}

.yb-home .yb-latest-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.yb-home .yb-latest-list li {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 11px 0;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.yb-home .yb-latest-list li:last-child {
  border-bottom: none;
}

.yb-home .yb-date {
  flex-shrink: 0;
  font-size: 12.5px;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}

.yb-home .yb-sep {
  flex-shrink: 0;
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.yb-home .yb-latest-list a {
  min-width: 0;
  overflow: hidden;
  font-size: 14.5px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: color .2s;
}

.yb-home .yb-latest-list a:hover {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

.yb-home .yb-more {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed var(--vp-c-divider);
  text-align: right;
}

.yb-home .yb-more a {
  display: inline-block;
  font-size: 13.5px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color .2s;
}

.yb-home .yb-more a:hover {
  color: var(--vp-c-brand-1);
}

/* ---- 移动端：改为上下布局 ---- */
@media (max-width: 900px) {
  .yb-home {
    flex-direction: column;
    gap: 32px;
  }

  .yb-home-right {
    flex: 1 1 auto;
    width: 100%;
  }
}
</style>
