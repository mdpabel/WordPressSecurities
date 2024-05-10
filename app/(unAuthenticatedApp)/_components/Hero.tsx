import { Button } from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 h-64 md:h-[400px] mb-10 mt-6 md:mb-0 md:mt-0'>
      <div className='border-black flex flex-col justify-center px-4 mx-auto space-y-6 md:space-y-8 md:px-0'>
        <div className='space-y-5 '>
          <h1
            style={{
              lineHeight: 1.1,
            }}
            className='text-2xl font-semibold md:text-[3.5rem]'>
            Clean and Protect Your Website Now
          </h1>
          <h2 className='mb-5 font-light text-gray-800 sm:text-xl'>
            Hackers don&apos;t take vacations. Restore your peace of mind by
            securing your online presence with our expert engineers.
          </h2>
        </div>
        <div className='space-x-4 flex'>
          <Button asChild>
            <Link href='/'>Fix hacked site</Link>
          </Button>
          <Button className='border border-black' variant='outline' asChild>
            <Link href='/pricing'> Plans & Pricing</Link>
          </Button>
        </div>
      </div>

      <div className='hidden md:flex justify-center items-center'>
        <Image
          src='/hero.png'
          alt='wordfence scan report'
          width={1200}
          height={700}
          className='p-8'
        />
      </div>
    </section>
  );
};

export default Hero;
