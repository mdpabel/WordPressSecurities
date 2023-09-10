import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default async function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { userId } = auth();

  const userId = true;

  return (
    <>
      <header>
        <Header isLoggedIn={!!userId} />
      </header>
      <section>{children}</section>
      <Footer />
    </>
  );
}
