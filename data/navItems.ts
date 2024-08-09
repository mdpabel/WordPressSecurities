const subMenus = [
  {
    title: 'Malware Removal',
    href: '/malware-removal',
  },
  {
    title: 'Website Maintenance',
    href: '/website-maintenance',
  },
  {
    title: 'Speed Optimization',
    href: '/speed-optimization',
  },
  {
    title: 'WordPress Security',
    href: '/wordpress-security',
  },
  {
    title: 'Blacklist Removal',
    href: '/blacklist-removal',
  },
  {
    title: 'WordPress Development',
    href: '/wordpress-development',
  },
  {
    title: 'Headless WordPress',
    href: '/headless-wordpress',
  },
] as const;

export const navItems = [
  {
    id: 0,
    label: 'Home',
    link: '/',
  },
  {
    id: 1,
    label: 'Pricing',
    link: '/pricing',
  },
  {
    id: 3,
    label: 'Solutions',
    link: '/solutions',
    subMenu: subMenus,
  },
  {
    id: 4,
    label: 'Store',
    link: '/store',
  },
  // {
  //   id: 5,
  //   label: 'Guides',
  //   link: '/guides',
  // },
];

export type SubMenu = typeof subMenus;
