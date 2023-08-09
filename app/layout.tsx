import "../styles/globals.css";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";

import { headers } from "next/headers";
import { useUser } from "@/stores/user";

export const metadata: Metadata = {
  title: "WordPress Securites | Your Source for WordPress Security",
};

const playfair = Playfair_Display({ subsets: ["latin"] });

const getSession = async (cookie: string) => {
  const response = await fetch("http://localhost:3000/api/auth/session", {
    headers: {
      cookie,
    },
  });
  const session = await response.json();

  return session;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await getSession(headers().get("cookie") ?? "");

  console.log(session);

  // useUser.setState({
  //   email : session.data.
  // })

  return (
    <html className="scroll-smooth" suppressHydrationWarning={true} lang="en">
      <body className={playfair.className}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
