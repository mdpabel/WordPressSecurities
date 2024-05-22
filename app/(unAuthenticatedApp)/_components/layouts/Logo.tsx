'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

const Logo = ({ href = '/' }: { href?: string }) => {
  return (
    <Link
      href={href}
      className='flex items-center space-x-2 font-semibold text-2xl text-gray-900'>
      <Image
        src={logo}
        alt='Next Generation WordPress logo'
        width={150}
        height={150}
      />
    </Link>
  );
};

export default Logo;
