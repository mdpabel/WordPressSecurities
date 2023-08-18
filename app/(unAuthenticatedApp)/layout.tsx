import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useUser } from "@/stores/user";
import ClientSideStateInitializer from "@/components/ClientSideStateInitializer";
import { auth } from "@clerk/nextjs";

export default async function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  useUser.setState({
    isLoggedIn: !!userId,
  });

  return (
    <>
      <header>
        <Header isLoggedIn={!!userId} />
        <ClientSideStateInitializer
          isLoggedIn={!!userId}
          email=""
          stripeCustomer=""
          userId={userId ?? ""}
        />
      </header>
      <section>{children}</section>
      <Footer />
    </>
  );
}
