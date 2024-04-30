import Footer from './_components/layouts/Footer';
import Header from './_components/layouts/Header';
import CookieBanner from './_components/CookieBanner';

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
      <main>
        {children}
        {/* <StoreInitializer /> */}
      </main>
      <Footer />
      {/* <CookieBanner />  */}
    </>
  );
}
