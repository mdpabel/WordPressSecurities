import dynamic from 'next/dynamic';
import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';
import { ClerkProvider, auth } from '@clerk/nextjs';
import { Toaster } from '@/components/toaster';
import NProgressBar from '@/components/NProgressBar';

const FaceBookMessenger = dynamic(
  () => import('./(unAuthenticatedApp)/_components/FbMessenger'),
);

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),
  title: 'WordPress Securites | Your Source for WordPress Security',
  verification: {
    google: 'GaE_YhZELr4ZqjhfgKydadvgHdzBlfKJGC1UZKIZono',
    other: {
      'p:domain_verify': '4320df33c383600249aec8097c68ea76',
    },
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html className='scroll-smooth' lang='en'>
        <head>
          <link
            rel='prefetch'
            href='https://www.wordpresssecurities.com/login'
          />
        </head>
        <body className={poppins.className}>
          <NProgressBar>
            {children}
            <Toaster />
            {/* <FaceBookMessenger />  */}
          </NProgressBar>
        </body>
      </html>
    </ClerkProvider>
  );
}
