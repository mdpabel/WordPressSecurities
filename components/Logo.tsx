import React from 'react';
import { WordPressIcon } from './icons';
import Link from 'next/link';

const Logo = ({ href = '/' }: { href?: string }) => {
  return (
    <Link
      href={href}
      className='flex items-center text-2xl font-semibold text-gray-900 space-x-2'
    >
      <WordPressIcon />
      <span>Securities</span>
    </Link>
  );
};

export default Logo;
