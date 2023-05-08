import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    ["script", { src: "/assets/scripts/baidu-tongji.js" }],
    ["script", { src: "/assets/scripts/busuanzi.pure.mini.js" }],
    //["link", { rel: "stylesheet", href: "/assets/styles/bootstrap.min.css" }],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "CrossDB",
      description: "High Performance Distributed Embedded Database Development Platform",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "CrossDB",
      description: "高性能分布式嵌入式数据库开发平台",
    },
  },

  theme,

  plugins: [
    searchProPlugin({
      // index all contents
      indexContent: true,
    }),
/*
    docsearchPlugin({
      indexName: "CrossDB",
      appId: "M4EXXEZIEG",
      apiKey: "fd8891a9c4cc21e0ef4f11bf44f7a11e",
    }),
*/
    googleAnalyticsPlugin({
      id: "G-VPTG3S10X7",
    }),
  ],
});
