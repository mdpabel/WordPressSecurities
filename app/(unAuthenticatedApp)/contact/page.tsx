import React from 'react';
import { TwitterIcon, EmailIcon } from '@/components/common/icons';
import ContactForm from './ContactForm';
import ComponentWrapper from '@/components/common/ComponentWrapper';

export const dynamic = 'force-static';

const Contact = () => {
  return (
    <ComponentWrapper className='pt-12 md:pt-20'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <div className='bg-white/50 flex flex-col items-center justify-center p-5 rounded-lg'></div>
        <div>
          <ContactForm />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Contact;
