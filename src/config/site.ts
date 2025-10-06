export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "چوبینو ",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "چوبینو!",
      href: "/",
    },
    {
      label: "فروشگاه",
      href: "/shop",
    },
    {
      label: "محصولات",
      href: "/product",
    },
    {
      label: "وبلاگ",
      href: "/blog",
    },
    {
      label: "درباره ما",
      href: "/about",
    },
    {
      label: "ارتباط باما",
      href: "/call",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
