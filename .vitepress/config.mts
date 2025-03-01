import { defineConfigWithTheme } from "vitepress";
import escookConfig from "@escook/vitepress-theme/config";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  // base: "/y-blog/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "logo/Yzs-logo.png",
      },
    ],
  ],
  extends: escookConfig,
  title: "小叶的JAVA笔记",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/logo/Yzs-logo.png",
    musicBall: {
      src: "/bgm/bgm.mp3", // 音乐文件路径MP3",
      autoplay: true,
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "个人简历", link: "/resume" },
      {
        text: "Java技术栈",
        items: [
          {
            text: "Spring Cloud",
            link: "/InterviewQuestion/SpringCloud",
          },
          {
            text: "Redis",
            link: "/InterviewQuestion/Redis",
          },
        ],
        activeMatch: "^/InterviewQuestion/",
      },
      {
        text: "项目经历",
        items: [
          {
            text: "学生教育管理系统",
            link: "/projects/edc",
          },
          {
            text: "高并发电商系统",
            link: "/projects/b2c",
          },
          {
            text: "客户关系管理系统",
            link: "/projects/crm",
          },
        ],
      },
    ],
    sidebar: {
      "/InterviewQuestion/": [
        {
          text: "Java 技术栈",
          items: [
            { text: "Spring Cloud", link: "/InterviewQuestion/SpringCloud" },
            { text: "Reids", link: "/InterviewQuestion/Redis" },
          ],
        },
      ],
      "/projects/": [
        {
          text: "学生教育管理系统",
          items: [
            {
              text: "云课堂、考试系统",
              link: "/projects/edc",
            },
          ],
        },
        {
          text: "高并发电商系统",
          items: [{ text: "商品管理、支付管理", link: "/projects/b2c" }],
        },
        {
          text: "客户关系管理系统",
          items: [{ text: "用户验证、资产结算", link: "/projects/crm" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Topeceen/y-blog" },
    ],
  },
  vite: {
    ssr: {
      noExternal: ["@escook/vitepress-theme", "vitepress"],
    },
  },
});
