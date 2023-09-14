import "../styles/globals.css";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import { ClerkProvider, auth } from "@clerk/nextjs";
import { Toaster } from "@/components/common/toaster";
import NProgressBar from "@/components/common/NProgressBar";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),
  title: "WordPress Securites | Your Source for WordPress Security",
  verification: {
    google: "GaE_YhZELr4ZqjhfgKydadvgHdzBlfKJGC1UZKIZono",
    other: {
      "p:domain_verify": "4320df33c383600249aec8097c68ea76",
    },
  },
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
          <>
            <NProgressBar>{children}</NProgressBar>
          </>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
