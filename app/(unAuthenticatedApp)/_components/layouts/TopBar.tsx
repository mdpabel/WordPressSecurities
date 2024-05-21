import Link from 'next/link';
import React from 'react';
import ComponentWrapper from '../../../../components/ComponentWrapper';
import TextCarousel from './TextCarousel';
import { cn } from '@/lib/utils';

const TopBar = () => {
  return (
    <div className={cn('bg-gradient-to-r text-white', 'custom-background')}>
      <ComponentWrapper>
        <div className='flex justify-between items-center font-semibold text-sm'>
          <TextCarousel />
          <nav className='md:block hidden'>
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
                <Link href='/faq'>FAQ</Link>
              </li>

              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default TopBar;
