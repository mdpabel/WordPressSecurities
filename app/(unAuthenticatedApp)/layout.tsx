import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>{children}</section>
      <Footer />
    </>
  );
}
