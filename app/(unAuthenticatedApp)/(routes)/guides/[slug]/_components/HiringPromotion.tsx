import prisma from '@/prisma/prisma';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Title } from '@/components/Title';
import {
  PerformanceIcon,
  SEOIcon,
  SecurityIcon,
  VirusIcon,
  WarningIcon,
} from '@/components/icons';
import ComponentWrapper from '@/components/ComponentWrapper';

const getData = async () => {
  const res = await prisma.user.findFirst();
};

interface IWrapper {
  children: ReactNode;
  href: string;
}

const Wrapper = ({ children, href }: IWrapper) => (
  <Link href={href}>
    <div className='flex flex-col items-center transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 hover:rounded '>
      {children}
    </div>
  </Link>
);

const HiringPromotion = () => {
  return (
    <ComponentWrapper>
      <Title className='text-center'>I need help with …</Title>
      <div className='grid grid-cols-2 gap-5 pt-5'>
        <Wrapper href='/web-development'>
          <Image
            width={40}
            height={40}
            src='/developer.png'
            alt='Website Development'
          />
          <p className='text-center'>Develop Unhackable Website</p>
        </Wrapper>

        <Wrapper href={`https://www.wordpresssecurities.com/`}>
          <SecurityIcon />
          <p className='text-center'>WordPress Security</p>
        </Wrapper>

        <Wrapper href={`https://www.wordpresssecurities.com/`}>
          <VirusIcon />
          <p className='text-center'>Removed Malware/Virus</p>
        </Wrapper>

        <Wrapper href='https://mdpabel.com'>
          <WarningIcon />
          <p className='text-center'>Fix any errors</p>
        </Wrapper>

        <Wrapper href='https://mdpabel.com'>
          <PerformanceIcon />
          <p className='text-center'>Optimize site speed</p>
        </Wrapper>

        <Wrapper href='https://mdpabel.com'>
          <SEOIcon />
          <p className='text-center'>SEO and Digital Marketing</p>
        </Wrapper>
      </div>
    </ComponentWrapper>
  );
};

export default HiringPromotion;
