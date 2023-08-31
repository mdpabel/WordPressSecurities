const subMenus = [
  {
    title: "Malware Removal",
    href: "/malware-removal",
  },
  {
    title: "Google Safe Browsing blacklist",
    href: "/google-safe-browsing-blacklist",
  },
  {
    title: "McAfee Blacklist",
    href: "/mcafee-blacklist",
  },
  {
    title: "Penetration Testing",
    href: "/penetration-testing",
  },

  {
    title: "Redirect Malware",
    href: "/redirect-malware",
  },
  {
    title: "DDoS Protection",
    href: "/ddos-protection",
  },
  {
    title: "AVAST Blacklist",
    href: "/avast-blacklist",
  },
  {
    title: "http500 Internal Server Error",
    href: "/internal-server-error",
  },
  {
    title: "Malware Prevention",
    href: "/malware-prevention",
  },
  {
    title: "Norton Safe Blacklist",
    href: "/norton-safe-blacklist",
  },
  {
    title: "SSL Certificate Installation",
    href: "/ssl-certificate-installation",
  },
] as const;

export const navItems = [
  {
    id: 0,
    label: "Home",
    link: "/",
  },
  {
    id: 1,
    label: "Pricing",
    link: "/pricing",
  },
  {
    id: 3,
    label: "Solutions",
    link: "/solutions",
    subMenu: subMenus,
  },
  {
    id: 4,
    label: "Contact",
    link: "/contact",
  },
];

const subMenusItems = subMenus.map((sm) => sm.href);

export type SubMenuType = typeof subMenus;
export type SubMenuHefType = (typeof subMenusItems)[0];
