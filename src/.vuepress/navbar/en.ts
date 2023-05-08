import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Products", icon: "software", link: "/products/"},
  { text: "Documentation", icon: "read", link: "/docs/"},
  //{ text: "Products", icon: "software", link: "/products/", prefix: "products/", children: "structure"},
  //{ text: "Documentation", icon: "read", link: "/docs/", prefix: "docs/", children: "structure"},
  { text: "Blog", icon: "blog", link: "/blog.html" },
  { text: "About", icon: "blog", link: "/about/"},
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
]);
