const subMenus = [
  {
    title: "Blacklist Removal",
    href: "/solutions/blacklist-removal",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Malware Prevention",
    href: "/solutions/malware-prevention",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Malware Removal",
    href: "/solutions/malware-removal",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Malware Detection",
    href: "/solutions/malware-detection",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "DDoS Protection",
    href: "/solutions/ddos-protection",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
];

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

type SubMenuUnion = Exclude<
  NonNullable<(typeof subMenusItems)[number]>,
  undefined
>;
