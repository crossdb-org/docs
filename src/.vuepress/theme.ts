import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://crossdb.org",

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "cross-db/crossdb",

  docsRepo: "cross-db/docs",
  docsDir: "docs",

  hotReload: true,

  displayFooter: true,

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      copyright: false,
      //footer: 'Copyright © 2023 CrossDB | ' + 
      //      '<span id="busuanzi_container_page_pv">View <span id="busuanzi_value_page_pv"></span>',
	  footer: 'Copyright &copy; 2023 CrossDB | ' +
            '<a href="/about/terms">Terms</a> | ' +
            '<a href="/about/privacy">Privacy</a> | ' +
            '<a href="/about/refund">Refund</a> | ' +
            '<a href="/about/about">About</a> | ' +
            '<span id="busuanzi_container_page_pv">View <span id="busuanzi_value_page_pv"></span>',

      metaLocales: {
        editLink: "Edit this page",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      copyright: false,
      footer: 'Copyright © 2023 CrossDB | ' + 
            '<span id="busuanzi_container_page_pv">访问量<span id="busuanzi_value_page_pv"></span>次',

      // page meta
      metaLocales: {
        editLink: "编辑此页",
      },
    },
  },

  plugins: {
    comment: {
      provider: "Giscus",
      repo: "cross-db/docs",
      repoId: "R_kgDOHf96fA",
      category: "Announcements",
      categoryId: "DIC_kwDOHf96fM4CWGDD",
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      card:  true,
      container: true,
      //demo: true,
      chart: true,
      echarts: true,
      mermaid: true,
      flowchart: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      gfm: true,
      //include: true,
      //katex: true,
      mark: true,
      sub: true,
      sup: true,
      tabs: true,
      //vPre: true,
    },

    blog: {
      article: "/blog/",
      filter: ({ pathLocale, filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith(pathLocale.substring(1) + "posts/") : false
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },
  }
});
