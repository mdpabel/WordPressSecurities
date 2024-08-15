import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import CallToAction from './CallToAction';

type Props = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  buttonText: string;
  buttonLink: string;
  className?: string;
};

const Hero = ({
  buttonLink,
  buttonText,
  description,
  image,
  title,
  className,
}: Props) => {
  return (
    <section
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-0 mb-10 md:mb-0 h-64 md:h-[400px]',
      )}>
      <div className='flex flex-col justify-center space-y-6 md:space-y-8 mx-auto px-4 md:px-0 border-black'>
        <div className='space-y-5'>
          <h1
            style={{
              lineHeight: 1.1,
            }}
            className='font-semibold text-2xl md:text-[3.2rem]'>
            {title}
          </h1>
          <h2 className='mb-5 font-light text-gray-800 sm:text-xl'>
            {description}
          </h2>
        </div>
        <div className='flex space-x-4'>
          <CallToAction
            buttonLink={buttonLink}
            buttonText={buttonText}
            className={className}
          />
          <Button className='border border-black' variant='outline' asChild>
            <Link href='/pricing'>Plans & Pricing</Link>
          </Button>
        </div>
      </div>

      <div className='md:flex justify-center items-center hidden'>
        <Image
          src={image.src || '/home.png'}
          alt={image.alt}
          width={600}
          height={400}
          className='p-8 max-h-[400px]'
        />
      </div>
    </section>
  );
};

export default Hero;
