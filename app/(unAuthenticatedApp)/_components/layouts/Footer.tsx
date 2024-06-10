import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='m-4'>
      <div className='md:flex md:justify-between md:items-center mx-auto p-4 w-full max-w-screen-xl'>
        <span className='text-black text-sm sm:text-center'>
          © {new Date().getFullYear()}{' '}
          <Link href='/' className='hover:underline'>
            Wordpresssecurities
          </Link>
          . all rights reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 sm:mt-0 font-medium text-black text-sm'>
          <li>
            <Link className='mr-4 md:mr-6 hover:underline' href='/faq'>
              FAQ
            </Link>
          </li>

          <li>
            <Link href='/about-us' className='mr-4 md:mr-6 hover:underline'>
              About us
            </Link>
          </li>

          <li>
            <Link href='/privacy' className='mr-4 md:mr-6 hover:underline'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href='/cookie-policy' className='hover:underline'>
              Cookie Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
