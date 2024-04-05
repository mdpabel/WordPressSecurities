'use client';
import { WordPressIcon } from '../ui/icons';
import Link from 'next/link';

const Logo = ({ href = '/' }: { href?: string }) => {
  const domain = 'wordpresssecurities.com';

  if (typeof window !== 'undefined') {
    window.location.hostname || document.location.hostname;
  }

  const wpSec = domain == 'wordpresssecurities.com' ? true : false;

  return (
    <Link
      href={href}
      className='flex items-center text-2xl font-semibold text-gray-900 space-x-2'>
      <WordPressIcon />
      <span>{wpSec ? 'Securities' : 'Next Generation'}</span>
    </Link>
  );
};

export default Logo;
