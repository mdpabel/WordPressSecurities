import { SectionTitleWithSubTitle, Title } from '@/components/Title';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const CompaniesLogo = () => {
  const totalItems = 8;
  return (
    <div
      className='mt-10 py-2 default-theme'
      style={{
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))',
      }}>
      <h2 className='pt-3 font-medium text-center text-white text-xl'>
        Companies That Trust Us
      </h2>

      <div className='relative mx-auto h-[100px] overflow-hidden'>
        {new Array(totalItems).fill(undefined).map((item, index) => {
          // const delay =
          //   Math.ceil((30 / totalItems) * (totalItems - index + 1)) * -1;
          const delay = (30 / 8) * (8 - index + 1) * -1;
          return (
            <div
              key={index}
              className={cn(
                'left-[100%] absolute rounded-md w-[200px] h-[100px] animate-[toLeft_30s_linear_infinite] flex justify-center items-center',
              )}
              style={{
                animationDelay: delay + 's',
              }}>
              <Image
                src='/clients-logo/client-03.svg'
                width={200}
                height={100}
                alt='client-logo'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesLogo;
