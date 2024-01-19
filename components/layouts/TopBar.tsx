import Link from 'next/link';
import React from 'react';
import ComponentWrapper from '../ui/ComponentWrapper';

const TopBar = () => {
  return (
    <div className='py-2 text-white bg-black'>
      <ComponentWrapper>
        <div className='flex justify-between text-sm font-semibold'>
          <div>Discover how to protect your WordPress site from threats</div>
          <nav className='hidden md:block'>
            <ul className='flex justify-between space-x-4'>
              <li>
                <Link href='/about-us' className='hover:underline'>
                  About us
                </Link>
              </li>
              <li>
                <Link href='/team' className='hover:underline'>
                  Team
                </Link>
              </li>
              <li>
                <Link href='/privacy' className='hover:underline'>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href='/cookie-policy' className='hover:underline'>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href='/faq'>FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default TopBar;
