import ComponentWrapper from "@/components/ComponentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useSidebar } from "@/stores/sidebar";

export default async function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg_primary">
      <Header dashboard={true} />
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
