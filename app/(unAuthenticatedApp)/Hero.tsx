import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='container border-black flex flex-col items-center justify-center px-4 mx-auto space-y-8 md:px-0 h-64 md:h-80'>
      <div className='space-y-5 '>
        <h1 className='text-2xl font-semibold text-center md:text-6xl'>
          Unmasking Threats
        </h1>
        <h2 className='mb-5 font-light text-gray-600 sm:text-xl'>
          Hackers don&apos;t take vacations. Keep your WordPress site secure and
          give them no chance to exploit vulnerabilities.
        </h2>
      </div>
      <div className='space-x-4 flex'>
        <Button asChild>
          <Link href='?type=subscription#subscription'>Fix hacked site</Link>
        </Button>
        <Button className='border border-black' variant='outline' asChild>
          <Link href='?type=instant#instant'> Plans & Pricing</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
