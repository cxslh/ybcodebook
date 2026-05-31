---
title: java反编译工具
permalink: /classlib
---

## classlib
jclasslib，可以理解他是一个工具，用于查询已编译成JAVA类的各种文件的实际内容，也可以通过jclasslib直接进行这些类文件的编写，jclasslib自带一个库，可以方便用户快速读写编辑类文件。

引入JAVA类后，可以看到其，一般信息、常量池、接口、字段、方法、属性，并且可以分别进行查阅。

jclasslib 可以切换中文、英文、波兰文、德文，并且可以自动识别系统当前使用语言；

开源下载地址：[https://github.com/ingokegel/jclasslib](https://github.com/ingokegel/jclasslib) 同时可以支持linux、mac、windows、unix多个平台

## JD_GUI
https://java-decompiler.github.io

点：反编译的源代码基本符合，没有乱七八糟新增的修饰符

缺点：反编译过程耗时较长（50MB需要10分钟左右）、 无法还原内部类

## jadx
jadx 是一款功能强大的反编译工具，基于 Java 开发，使用起来简单方便（拖拽式操作），不光提供了命令行程序，还提供了 GUI 程序。可以免费使用，一般情况下，直接使用 GUI 程序就可以了。

● 项目地址：[https://github.com/skylot/jadx](https://github.com/skylot/jadx)

● 下载地址：[https://github.com/skylot/jadx/releases/tag/v1.3.1](https://github.com/skylot/jadx/releases/tag/v1.3.1)

下载之后，解压下载好的 jadx 压缩文件后进入 bin 目录即可找到可执行文件。

● jadx：命令行版本

● jadx-gui：图形操作界面版本

jadx 支持 Windows、Linux、 macOS，能打开.apk, .dex, .jar,.zip等格式的文件

就比如说需要反编译一个 jar 包查看其源码的话，直接将 jar 包拖入到 jadx 中就可以了。

再比如说想看看某个 apk 的源码，拿到 apk 之后直接拖入进 jadx 中就可以了。

