'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Logo = ({ href = '/' }: { href?: string }) => {
  const [className, setClassName] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    const className = pathName.replace('/solutions/', '');
    setClassName(className);
  }, [pathName]);

  // const serviceName =
  //   className.replace('-', ' ') === '/'
  //     ? 'wordpress'
  //     : className.replace('-', ' ');

  return (
    <div className='inline-block'>
      <Link href={href}>
        {/* <Image
          src={logo}
          alt='Next Generation WordPress logo'
          width={150}
          height={150}
        /> */}
        <div className='flex text-3xl text-center'>
          <span
            style={{
              backgroundClip: 'text',
            }}
            className={cn(
              'bg-clip-text font-semibold text-transparent',
              'default-theme',
              className,
            )}>
            N
          </span>
          <span>ext Gen</span>
        </div>
        <div className='flex justify-center items-center -mt-1'>
          <div
            className={cn('h-[1.5px] w-full default-theme', className)}></div>
          <div className='text-[10px] uppercase'>WordPress</div>
          <div
            className={cn('h-[1.5px] w-full default-theme', className)}></div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
