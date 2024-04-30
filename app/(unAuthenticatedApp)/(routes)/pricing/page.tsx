import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import FAQ from '@/app/(unAuthenticatedApp)/_components/FAQ';
import { SectionTitleWithSubTitle } from '@/components/Title';
import {
  getStandardProducts,
  getSubscriptionsBasedProducts,
} from '@/swell/product';
import PricingTable from '@/app/(unAuthenticatedApp)/_components/pricing/PricingTable';
import GlobalProjectsMap from '@/app/(unAuthenticatedApp)/_components/GlobalProjectsMap';

export const dynamic = 'force-static';

const Pricing = async () => {
  const standardProducts = await getStandardProducts();
  const subscriptionsProducts = await getSubscriptionsBasedProducts();

  return (
    <ComponentWrapper className='pt-10 space-y'>
      <SectionTitleWithSubTitle
        title='Safely Empower Your Digital Business'
        subTitle='Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites'
      />
      <PricingTable
        services={standardProducts}
        subscriptions={subscriptionsProducts}
      />
      <div className='mt-6' />
      <GlobalProjectsMap />
      <FAQ />
    </ComponentWrapper>
  );
};

export default Pricing;
