import '../styles/globals.css';
import { Playfair_Display } from 'next/font/google';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WordPress Securites | Your Source for WordPress Security',
};

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-smooth' suppressHydrationWarning={true} lang='en'>
      <body className={playfair.className}>
        <main className=''>{children}</main>
      </body>
    </html>
  );
}
