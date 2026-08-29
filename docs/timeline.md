---
title: 更新日志
permalink: /timeline
pageClass: timeline-page
---

<style>
/* =====================================================
   更新日志页 · 时间线样式
   仅作用于本页（pageClass: timeline-page）
   ===================================================== */

/* 页面布局：加宽正文、隐藏空大纲，让时间线更舒展 */
.timeline-page .VPDoc .container {
  max-width: 1080px !important;
}
.timeline-page .VPDoc .content,
.timeline-page .VPDoc .content-container {
  max-width: 100% !important;
}
.timeline-page .VPDoc .aside {
  display: none !important;
}

/* 主题变量 */
.timeline-page {
  --tl-line: rgba(62, 175, 124, 0.38);
  --tl-card-bg: #ffffff;
  --tl-card-border: #e8edf1;
  --tl-text: #4b5563;
  --tl-dot-bg: #ffffff;
  --tl-dot-border: #3eaf7c;
  --tl-dot-ring: rgba(62, 175, 124, 0.18);
  --tl-shadow: 0 2px 12px rgba(30, 41, 59, 0.07);
  --tl-shadow-hover: 0 12px 30px rgba(30, 41, 59, 0.14);
}
html.dark .timeline-page {
  --tl-line: rgba(66, 185, 131, 0.42);
  --tl-card-bg: #2d333b;
  --tl-card-border: #3d444d;
  --tl-text: #9aa7b4;
  --tl-dot-bg: #22272e;
  --tl-dot-border: #42b983;
  --tl-dot-ring: rgba(66, 185, 131, 0.22);
  --tl-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
  --tl-shadow-hover: 0 12px 30px rgba(0, 0, 0, 0.55);
}

/* 时间轴主干（居中竖线） */
._timeline {
  position: relative;
}
._timeline::before {
  content: "";
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 50%;
  width: 2px;
  margin-left: -1px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--tl-line) 5%,
    var(--tl-line) 95%,
    transparent
  );
  border-radius: 2px;
  pointer-events: none;
}

/* 节点：桌面端左右交替排布 */
.timeline-page .timeline-dot {
  position: relative;
  width: 50%;
  padding: 0 46px 34px 0;
  box-sizing: border-box;
  color: var(--tl-text);
}
.timeline-page .timeline-dot:nth-child(even) {
  margin-left: 50%;
  padding: 0 0 34px 46px;
}

/* 日期徽章 */
.timeline-page .timeline-dot-title {
  display: block;
  width: max-content;
  max-width: 100%;
  margin-left: auto;
  padding: 7px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.5px;
  color: #ffffff;
  background: linear-gradient(135deg, #3eaf7c, #2f8f63);
  box-shadow: 0 4px 14px rgba(62, 175, 124, 0.35);
}
.timeline-page .timeline-dot:nth-child(even) .timeline-dot-title {
  margin-left: 0;
}
/* 最新一期追加小徽标 */
.timeline-page .timeline-dot:first-child .timeline-dot-title::after {
  content: "最新";
  display: inline-block;
  margin-left: 8px;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  background: linear-gradient(135deg, #f97316, #ef4444);
  box-shadow: 0 3px 8px rgba(239, 68, 68, 0.35);
  vertical-align: 1px;
}

/* 节点圆点 + 连接线 */
.timeline-page .timeline-dot::before {
  content: "";
  position: absolute;
  top: 9px;
  left: calc(100% - 8px);
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 50%;
  background: var(--tl-dot-bg);
  border: 3px solid var(--tl-dot-border);
  box-shadow: 0 0 0 4px var(--tl-dot-ring);
  z-index: 1;
}
.timeline-page .timeline-dot::after {
  content: "";
  position: absolute;
  top: 15px;
  left: calc(100% - 28px);
  width: 28px;
  height: 2px;
  background: var(--tl-line);
}
.timeline-page .timeline-dot:nth-child(even)::before {
  left: auto;
  right: calc(100% - 8px);
}
.timeline-page .timeline-dot:nth-child(even)::after {
  left: auto;
  right: calc(100% - 28px);
}

/* 内容卡片 */
.timeline-page .timeline-dot ul {
  margin: 14px 0 0;
  padding: 16px 20px;
  list-style: none;
  background: var(--tl-card-bg);
  border: 1px solid var(--tl-card-border);
  border-radius: 14px;
  box-shadow: var(--tl-shadow);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.timeline-page .timeline-dot ul:hover {
  transform: translateY(-3px);
  border-color: var(--tl-dot-border);
  box-shadow: var(--tl-shadow-hover);
}
.timeline-page .timeline-dot li {
  position: relative;
  margin: 0;
  padding: 8px 0 8px 22px;
  font-size: 15px;
  line-height: 1.6;
}
.timeline-page .timeline-dot li + li {
  border-top: 1px dashed var(--tl-card-border);
}
.timeline-page .timeline-dot li::before {
  content: "";
  position: absolute;
  top: 16px;
  left: 4px;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--tl-dot-border);
  transform: rotate(45deg);
  opacity: 0.85;
}
.timeline-page .timeline-dot li a {
  text-decoration: none;
  transition: color 0.2s ease;
}
.timeline-page .timeline-dot li a:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* 入场动画 */
@media (prefers-reduced-motion: no-preference) {
  .timeline-page .timeline-dot {
    opacity: 0;
    transform: translateY(18px);
    animation: timeline-in 0.55s ease forwards;
  }
  .timeline-page .timeline-dot:nth-child(2) { animation-delay: 0.08s; }
  .timeline-page .timeline-dot:nth-child(3) { animation-delay: 0.16s; }
  .timeline-page .timeline-dot:nth-child(4) { animation-delay: 0.24s; }
  .timeline-page .timeline-dot:nth-child(5) { animation-delay: 0.32s; }
}
@keyframes timeline-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 移动端：单列左对齐 */
@media (max-width: 820px) {
  ._timeline::before {
    left: 11px;
    margin-left: 0;
  }
  .timeline-page .timeline-dot,
  .timeline-page .timeline-dot:nth-child(even) {
    width: 100%;
    margin-left: 0;
    padding: 0 0 28px 38px;
  }
  .timeline-page .timeline-dot::before,
  .timeline-page .timeline-dot:nth-child(even)::before {
    left: 4px;
    right: auto;
    top: 9px;
  }
  .timeline-page .timeline-dot::after,
  .timeline-page .timeline-dot:nth-child(even)::after {
    left: 22px;
    right: auto;
    width: 16px;
    top: 15px;
  }
  .timeline-page .timeline-dot-title,
  .timeline-page .timeline-dot:nth-child(even) .timeline-dot-title {
    margin-left: 0;
  }
  .timeline-page .timeline-dot ul {
    margin-top: 12px;
  }
}
</style>

::: timeline 2026-08
  - [FastExcel工具库的迭代演进](/fesodexcel)
:::

::: timeline 2024-09
  - [java反编译工具](/classlib)
  - [代码生成器](/javacoden)
:::

::: timeline 2024-06
  - [Springboot如何校验参数](/bootvalidparam)
  - [如何计算代码执行耗时](/codetime)
  - [序列化和反序列化(1)](/Serializable1)
  - [序列化和反序列化(2)-高效数据传输的秘密武器Protobuf](/Serializable2)
  - [序列化和反序列化(3)-序列化漏洞](/Serializable3)
  - [java中的VO、DAO、BO、PO、DO、DTO](/javapojo)
  - [Java Pojo之间的转换(1)](/javapojocovert)
:::

::: timeline 2022-06
  - [字符串工具类StrUtils](/StrUtils)
  - [BigDecimal工具类BigDecimalUtils](/BigDecimalUtil)
  - [日期工具类DateUtils](/DateUtils)
  - [异常工具类ExceptionUtils](/ExceptionUtil)
  - [对象工具类ObjectUtils](/ObjectUtil)
:::

::: timeline 2022-04
  - [OracleJDK和OpenJDK的下载和安装](/installjdk)
  - [48个关键字及2个保留字](/javakey)
  - [java中的三种注释方式](/javacomment)
  - [eclipse使用介绍](/eclipse)
  - [认识redis](/redisinfo)
  - [安装](/redisinstall)
  - [五大基本数据类型](/redistype)
  - [Redis三种特殊数据类型](/redisothertype)
  - [Springboot介绍](/bootinfo)
:::
