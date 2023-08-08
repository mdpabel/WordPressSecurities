import "../styles/globals.css";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
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
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    useUser.setState({
      email: session?.user?.email,
      isLoggedIn: true,
      userId: session?.user?.id,
    });
  }

  return (
    <html className="scroll-smooth" suppressHydrationWarning={true} lang="en">
      <body className={playfair.className}>
        <ClientSideStateInitializer
          email={session?.user?.email ?? ""}
          isLoggedIn={!!session?.user}
          userId={session?.user.id ?? ""}
        />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
