import { defineConfig } from 'vitepress'
import Permalink from "vitepress-plugin-permalink";
import timeline from "vitepress-markdown-timeline"; 

export default defineConfig({
  vite: {
    plugins: [Permalink(/* options */)],
    optimizeDeps: {
      include: ['recaptcha-v3']
    } 
  },
  lang: 'zh-CN', //语言，可选 en-US
  title: "程序员一博",
  description: "java文章、AI文章、网站导航、编程项目",
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '网站导航', link: '/nav/index' },
      { text: '更新日志', link: '/timeline' },
      {
        text: 'java',
        items: [
          {
            text: 'java基础', link: '/java/javabase/installjdk',
          },
          {
            text: 'java进阶', link: '/java/advanced/classlib',
          },
          {
            text: 'javaweb', link: '/java/javaweb',
          },
          {
            text: 'java常用工具类', link: '/java/utils/StringUtil',
          },
          {
            text: '开发记录', link: '/java/devnotes/javacoden',
          },
          {
            text: '框架',
            items: [
            ],
          },
          {
            text: '微服务',
            items: [
            ],
          },
          {
            text: '分布式组件|中间件',
            items: [
            ],
          },
          {
            text: '架构',
            items: [
            ],
          },
        ],
      },
      {
        text: '数据库',
        items: [
          { text: 'mysql', link: '/db/mysql' },
          { text: 'redis', link: '/db/redis/info' },
        ]
      },
      {
        text: '软件工具',
        items: [
          { text: '编程工具', link: '/tool/code/eclipse' },
          { text: 'widows软件', link: '/getting-started' },
        ]
      },
      { text: '关于', link: '/about/about' },
    ],
    search: { 
      provider: 'local'
    }, 
    sidebar: {

      '/java/javabase': [
        {
          items: [
              { text: '安装jdk', link: '/java/javabase/installjdk' },
              { text: '48个关键字及2个保留字', link: '/java/javabase/javakey' },
              { text: '如何计算代码执行耗时', link: '/java/javabase/codetime' }, 
              { text: 'java如何写注释', link: '/java/javabase/comment' },
              { text: 'Java Pojo之间的转换(1)', link: '/java/javabase/javapojocovertone' },
              { text: 'java中的VO、DAO、BO、PO、DO、DTO', link: '/java/javabase/pojo' },
              { text: '序列化(1)', link: '/java/javabase/serializable' },
              { text: '序列化(2)', link: '/java/javabase/serializable2' }, 
              { text: '序列化(3)', link: '/java/javabase/serializable3' },
          ],
        },
      ],
      '/java/devnotes': [
        {
          items: [
              { text: '代码生成器', link: '/java/devnotes/javacoden' },
          ],
        },
      ],
      '/java/advanced': [
        {
          items: [
              { text: 'java反编译工具', link: '/java/advanced/classlib' },
          ],
        },
      ],
      '/java/utils': [
        {
          items: [
            { text: 'StringUtil', link: '/java/utils/StringUtil' },
            { text: 'ObjectUtil', link: '/java/utils/ObjectUtils' },
            { text: 'BigDecimalUtil', link: '/java/utils/BigDecimal' },
            { text: 'DateUtils', link: '/java/utils/DateUtils' },
            { text: 'ExceptionUtils', link: '/java/utils/ExceptionUtils' },
          ],
        },
      ],
      '/java/javaframework/boot': [
        {
          items: [
            { text: '介绍', link: '/java/javaframework/boot/info' },
            { text: '如何校验参数', link: '/java/javaframework/boot/Springbootvalidparam' },
          ],
        },
      ],
      '/db/mysql/': [
        {
          items: [
            { text: '介绍', link: '/db/mysql/index' },
          ],
        },
      ],
       '/db/redis/': [
        {
          items: [
            { text: '介绍', link: '/db/redis/info' },
            { text: '安装', link: '/db/redis/install' },
            { text: '五大数据类型', link: '/db/redis/basetype' },
            { text: '三种特殊数据类型', link: '/db/redis/moretype' },
          ],
        },
      ],
      '/tool/code/': [
        {
          items: [
            { text: 'Eclipse', link: '/tool/code/Eclipse' },
            { text: 'Idea', link: '/tool/code/Idea' },
          ],
        },
      ],
      '/tool/windows/': [
        {
          items: [
            { text: 'Eclipse', link: '/tool/code/Eclipse' },
            { text: 'Idea', link: '/tool/code/Idea' },
          ],
        },
      ],
      '/about/': [
        {
          text: '',
          items: [
            { text: '关于我', link: '/about/about' },
            { text: '网站历程', link: '/about/timeline' },
            { text: '感谢赞赏', link: '/about/love' }
          ],
        },
      ],
    },
    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录', 
    //返回顶部文字修改
    returnToTopLabel:'TOP', 
    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    footer: { 
      message: '<span style="font-size:14px">免责声明：网站部分内容来自网上搜集更新，仅供读者预览及学习交流使用，原作者如果认为本站侵犯了您的版权,请告知，我会在24小时内会处理!</span><br>本站文章除特别声明外，均采用 CC BY-NC-SA 4.0 协议，转载请注明来源！', 
      //copyright: 'Copyright © 2019-2023 present Evan You', 
      // 自动更新时间
      copyright: `Copyright © 2019-${new Date().getFullYear()} present 程序员一博`, 
    }, 
    /*socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]*/
  },
  head: [
      ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  markdown: { 
    //行号显示
    lineNumbers: true, 

    //时间线
    config: (md) => {
      md.use(timeline);
    },
  }, 
})