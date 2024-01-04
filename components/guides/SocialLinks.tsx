import React from 'react';
import Link from 'next/link';
import ComponentWrapper from '../ui/ComponentWrapper';
import { Title } from '../ui/Title';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '../ui/icons';

const SocialLinks = () => {
  return (
    <ComponentWrapper>
      <Title className='text-center'>Stay in the loop ...</Title>
      <div className='grid grid-cols-3 gap-5 pt-5'>
        <Link
          href='/'
          style={{
            backgroundColor: '#4460A0',
            color: '#fff',
          }}
          className='flex justify-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'>
          <FacebookIcon />
        </Link>
        <Link
          href='/'
          style={{
            backgroundColor: '#2795E9',
            color: '#fff',
          }}
          className='flex justify-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'>
          <TwitterIcon />
        </Link>
        <Link
          href='/'
          style={{
            backgroundColor: '#007EBB',
            color: '#fff',
          }}
          className='flex justify-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'>
          <LinkedinIcon />
        </Link>
      </div>
    </ComponentWrapper>
  );
};

export default SocialLinks;
