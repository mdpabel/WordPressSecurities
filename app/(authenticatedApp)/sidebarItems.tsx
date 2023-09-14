import {
  BookIcon,
  DashBoardIcon,
  SubScriptionIcon,
  SupportInboxIcon,
  UserIcon,
} from "@/components/common/icons-client";

export const sidebarItems = [
  {
    id: 1,
    Icon: DashBoardIcon,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    Icon: SubScriptionIcon,
    label: "Manage Subscriptions",
    link: "/manage-subscriptions",
  },
  {
    id: 3,
    Icon: SubScriptionIcon,
    label: "Orders",
    link: "/orders",
  },
  {
    id: 4,
    Icon: BookIcon,
    label: "Security Reports",
    link: "/security-reports",
  },
  {
    id: 5,
    Icon: SupportInboxIcon,
    label: "Customer Support",
    link: "/customer-support",
  },

  {
    id: 6,
    Icon: UserIcon,
    label: "Manage Account",
    link: "/manage-account",
  },
];
