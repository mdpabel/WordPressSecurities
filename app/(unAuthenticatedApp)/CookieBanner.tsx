import Script from 'next/script';

const CookieBanner = () => {
  return (
    <Script
      src='https://cdn-cookieyes.com/client_data/d58925124e7c7f1749844dac/script.js'
      strategy='lazyOnload'
    />
  );
};

export default CookieBanner;
