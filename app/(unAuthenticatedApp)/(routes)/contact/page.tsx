import React from 'react';
import { TwitterIcon, EmailIcon } from '@/components/icons';
import ContactForm from './_components/ContactForm';
import ComponentWrapper from '@/components/ComponentWrapper';

export const dynamic = 'force-static';

const Contact = () => {
  return (
    <ComponentWrapper className='pt-12 md:pt-20'>
      <div className='gap-10 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col bg-white/50 p-5 rounded-lg'>
          <h2 className='font-medium text-2xl'>Contact Us</h2>
          <ul className='space-y-3 pt-6'>
            <li>Email: admin@nextgenwordpress.com</li>
            <li>Facebook: facebook.com/NextGenWordPress</li>
            <li>Linkedin: linkedin.com/in/nextgenwordpress</li>
            <li>Phone: +880123456789</li>
          </ul>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Contact;
