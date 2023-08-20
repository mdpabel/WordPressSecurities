import ComponentWrapper from "@/components/ComponentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { currentUser, RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import {
  BookIcon,
  DashBoardIcon,
  SubScriptionIcon,
  SupportInboxIcon,
  UserIcon,
} from "@/components/icons";

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
    label: "messages",
    link: "/messages",
  },
];

export default async function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  console.log(!user?.privateMetadata?.isAdmin);

  if (!user) {
    return <RedirectToSignIn />;
  }

  if (!user?.privateMetadata?.isAdmin) {
    redirect("/dashboard");
  }

  return (
    <div className="bg_primary">
      <Header isLoggedIn={!!user?.id} dashboard={true} />
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