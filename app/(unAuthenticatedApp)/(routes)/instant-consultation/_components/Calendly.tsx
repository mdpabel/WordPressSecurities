'use client';
import { SectionTitleWithSubTitle } from '@/components/Title';

const Calendly = () => {
  return (
    <div id='calendly'>
      <SectionTitleWithSubTitle
        title='Book a free call with our expert engineers.'
        subTitle='Schedule Your Complimentary Consultation for Expert Guidance'
        className='-mb-5 pt-10'
      />
      <iframe
        src='https://calendly.com/pabel7396/30min'
        width='100%'
        height='800px'></iframe>
    </div>
  );
};

export default Calendly;
