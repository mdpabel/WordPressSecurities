import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import PricingTable from './_components/PricingTable';
import Hero from '@/app/(unAuthenticatedApp)/_components/Hero';
import FAQ from '@/app/(unAuthenticatedApp)/_components/FAQ';

const WebsiteMaintenance = () => {
  return (
    <ComponentWrapper>
      <Hero
        title='Ensure Continuous Security for Your Website'
        description="Don't leave your site vulnerable. Keep your WordPress site secure with our regular maintenance and expert support."
        buttonText='Get started'
        buttonLink='/ongoing-security'
        image={{
          src: '/hero/website-maintenance.jpg',
          alt: 'Ongoing WordPress security',
        }}
        className='website-maintenance'
      />

      <PricingTable />
      <div className='py-10' />
      <FAQ />
    </ComponentWrapper>
  );
};

export default WebsiteMaintenance;
