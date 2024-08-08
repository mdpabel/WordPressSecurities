import { TickIcon } from '@/components/icons';
import React from 'react';

const services = [
  'Monthly 3-4 site health reports',
  'Malware/Virus clean up',
  'Software version updates',
  'Routine security checks and blocking of unwanted attacks.',
  'Real-time attack monitoring',
  'Regular reporting',
  'Blacklist removal',
];

const PricingTableItems = () => {
  return (
    <ul className='space-y-1 pb-5'>
      {services.map((service, index) => (
        <li key={index} className='flex items-center space-x-1'>
          <TickIcon className='text-[#614385]' />
          <span>{service}</span>
        </li>
      ))}
    </ul>
  );
};

export default PricingTableItems;
