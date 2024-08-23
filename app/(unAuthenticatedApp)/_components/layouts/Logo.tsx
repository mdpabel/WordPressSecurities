import Link from 'next/link';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <div className='inline-block'>
      <Link href='/'>
        <div className='flex text-3xl text-center'>
          <span
            style={{
              backgroundClip: 'text',
            }}
            className={cn(
              'bg-clip-text font-semibold text-transparent',
              'default-theme',
            )}>
            T
          </span>
          <span>hree zero</span>
        </div>
        <div className='flex justify-center items-center space-x-1 -mt-1'>
          <div className={cn('h-[1.5px] w-full default-theme')}></div>
          <div className='font-semibold text-[10px] uppercase'>Tech</div>
          <div className={cn('h-[1.5px] w-full default-theme')}></div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
