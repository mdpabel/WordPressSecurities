import "../styles/globals.css";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import { ClerkProvider, auth } from "@clerk/nextjs";
import { Toaster } from "@/components/common/toaster";

export const metadata: Metadata = {
  title: "WordPress Securites | Your Source for WordPress Security",
};

const playfair = Playfair_Display({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html className="scroll-smooth" suppressHydrationWarning={true} lang="en">
        <body className={playfair.className}>
          <main className="">{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
