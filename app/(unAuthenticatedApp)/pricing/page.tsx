import ComponentWrapper from '@/components/ui/ComponentWrapper';
import React from 'react';
import FAQ from '@/components/FAQ';
import { SectionTitleWithSubTitle } from '@/components/ui/Title';
import { getStandardProducts } from '@/lib/swell/product';
import PricingTable from './PricingTable';

export const dynamic = 'force-static';
export const revalidate = 86400;

const solutions = async () => {
  const services = await getStandardProducts();

  return (
    <ComponentWrapper>
      <div className='py-10'>
        <SectionTitleWithSubTitle
          title='Safely Empower Your Digital Business'
          subTitle='Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites'
        />
        <PricingTable services={services} />
      </div>
      <FAQ />
    </ComponentWrapper>
  );
};

export default solutions;
