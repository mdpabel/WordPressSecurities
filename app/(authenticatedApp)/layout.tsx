import ComponentWrapper from "@/components/ComponentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { auth } from "@clerk/nextjs";

export default async function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  return (
    <div className="bg_primary">
      <Header isLoggedIn={!!userId} dashboard={true} />
      <ComponentWrapper className="flex">
        <Sidebar />
        <section className="p-4 -ml-64 md:ml-0 min-h-[80vh] flex-1">
          {children}
        </section>
      </ComponentWrapper>
      <Footer />
    </div>
  );
}
