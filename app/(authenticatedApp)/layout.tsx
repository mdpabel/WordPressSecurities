import ComponentWrapper from "@/components/common/ComponentWrapper";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import { auth } from "@clerk/nextjs";

import {
  BookIcon,
  DashBoardIcon,
  SubScriptionIcon,
  SupportInboxIcon,
  UserIcon,
} from "@/components/common/icons";

const sidebarItems = [
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

export default async function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { userId } = auth();
  const userId = true;

  return (
    <div className="bg_primary">
      <Header isLoggedIn={!!userId} dashboard={true} />
      <ComponentWrapper className="flex">
        <Sidebar sidebarItems={sidebarItems} />
        <section className="p-4 -ml-64 md:ml-0 min-h-[80vh] flex-1">
          {children}
        </section>
      </ComponentWrapper>
      <Footer />
    </div>
  );
}
