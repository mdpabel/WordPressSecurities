import ComponentWrapper from '@/components/ui/ComponentWrapper';
import React from 'react';
import FAQ from '@/components/FAQ';
import { SectionTitleWithSubTitle } from '@/components/ui/Title';
import {
  getStandardProducts,
  getSubscriptionsBasedProducts,
} from '@/swell/product';
import PricingTable from '@/components/PricingTable';

getStandardProducts;

const Pricing = async () => {
  const standardProducts = await getStandardProducts();
  const subscriptionsProducts = await getSubscriptionsBasedProducts();

  return (
    <ComponentWrapper>
      <div className='py-10'>
        <SectionTitleWithSubTitle
          title='Safely Empower Your Digital Business'
          subTitle='Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites'
        />
        <PricingTable
          services={standardProducts}
          subscriptions={subscriptionsProducts}
        />
      </div>
      <FAQ />
    </ComponentWrapper>
  );
};

export default Pricing;
