import "../styles/globals.css";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import { useUser } from "@/stores/user";
// import ClientSideStateInitializer from "@/components/ClientSideStateInitializer";

// export const revalidate = 0;

export const metadata: Metadata = {
  title: "WordPress Securites | Your Source for WordPress Security",
};

const playfair = Playfair_Display({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // useUser.setState({
  //   email: session?.user?.email,
  //   isLoggedIn: !!session,
  //   userId: session?.user?.id,
  // });

  // console.log(useUser.getState().email);

  return (
    <html className="scroll-smooth" suppressHydrationWarning={true} lang="en">
      <body className={playfair.className}>
        <main className="">
          {/* <ClientSideStateInitializer
            email={session?.user?.email ?? ""}
            isLoggedIn={!!session}
            userId={session?.user?.id ?? ""}
          /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
