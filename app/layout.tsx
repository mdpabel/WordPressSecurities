import "../styles/globals.css";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import { ClerkProvider, auth } from "@clerk/nextjs";
import { useUser } from "@/stores/user";
import ClientSideStateInitializer from "@/components/ClientSideStateInitializer";

export const metadata: Metadata = {
  title: "WordPress Securites | Your Source for WordPress Security",
};

const playfair = Playfair_Display({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  useUser.setState({
    isLoggedIn: !!userId,
  });

  return (
    <ClerkProvider>
      <html className="scroll-smooth" suppressHydrationWarning={true} lang="en">
        <body className={playfair.className}>
          <main className="">{children}</main>
          <ClientSideStateInitializer
            isLoggedIn={!!userId}
            email=""
            stripeCustomer=""
            userId={userId ?? ""}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
