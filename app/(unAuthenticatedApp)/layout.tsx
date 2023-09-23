import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { getServicesSubMenus } from "@/lib/contentful";

export default async function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const solutionsSubmenu = await getServicesSubMenus();

  return (
    <>
      <header>
        <Header solutionsSubmenu={solutionsSubmenu} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
