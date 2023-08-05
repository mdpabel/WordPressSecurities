import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='m-4 '>
      <div className='w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between'>
        <span className='text-sm text-black sm:text-center '>
          © {new Date().getFullYear()}{' '}
          <Link href='/' className='hover:underline'>
            Wordpresssecurities
          </Link>
          . all rights reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0'>
          <li>
            <Link href='/about-us' className='mr-4 hover:underline md:mr-6 '>
              About us
            </Link>
          </li>
          <li>
            <Link
              href='/editorial-team'
              className='mr-4 hover:underline md:mr-6 '
            >
              Editorial Team
            </Link>
          </li>
          <li>
            <Link href='/' className='mr-4 hover:underline md:mr-6'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:underline'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
