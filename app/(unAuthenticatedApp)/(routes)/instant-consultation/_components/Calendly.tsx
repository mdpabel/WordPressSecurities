'use client';
import { SectionTitleWithSubTitle } from '@/components/Title';
import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div id='calendly'>
      <SectionTitleWithSubTitle
        title='Book a free call with our expert engineers.'
        subTitle='Schedule Your Complimentary Consultation for Expert Guidance'
        className='pt-10'
      />
      <InlineWidget
        styles={{
          height: '900px',
          marginTop: '-40px',
          marginBottom: '-40px',
        }}
        url='https://calendly.com/pabel7396/30min'
      />
    </div>
  );
};

export default Calendly;
