import React from 'react';
import Hero from '../../../_components/Hero';
import ComponentWrapper from '@/components/ComponentWrapper';
import PricingTable from './_components/PricingTable';
import FAQ from '../../../_components/FAQ';

const SpeedOptimization = () => {
  return (
    <ComponentWrapper>
      <Hero
        title='Boost Your WordPress Site Speed'
        description='Enhance your site performance and user experience with our expert speed optimization services for WordPress.'
        buttonText='Optimize Now'
        buttonLink='/speed-optimization'
        image={{
          src: '/hero/speed-optimization-2.png',
          alt: 'Speed Optimization for WordPress',
        }}
        className='speed-optimization'
      />
      <PricingTable />
      <div className='py-6' />
      <FAQ />
    </ComponentWrapper>
  );
};

export default SpeedOptimization;
