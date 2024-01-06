import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import StoreInitializer from './StoreInitializer';

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
        <StoreInitializer />
      </main>
      <Footer />
    </>
  );
}
