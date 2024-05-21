import lazy from 'next/dynamic';
import ComponentWrapper from '@/components/ComponentWrapper';
import Hero from './_components/Hero';
import ServiceCarousel from './_components/ServiceCarousel';
import FAQ from '@/app/(unAuthenticatedApp)/_components/FAQ';
import { SectionTitleWithSubTitle } from '@/components/Title';
import PricingTable from '@/app/(unAuthenticatedApp)/_components/pricing/PricingTable';
import {
  getProducts,
  getStandardProducts,
  getSubscriptionsBasedProducts,
} from '@/swell/product';
import { Product } from 'swell-js';
import { getFeaturedServices } from './_utils/services.util';
const GlobalProjectsMap = lazy(
  () => import('@/app/(unAuthenticatedApp)/_components/GlobalProjectsMap'),
);

export const dynamic = 'force-static';

interface ExtendedProduct extends Product {
  list: {
    listOfServices: string;
  };
}

const page = async () => {
  const subscriptionsProducts = await getSubscriptionsBasedProducts();
  const standardProducts = await getStandardProducts();
  const featuredServices = await getFeaturedServices();

  return (
    <ComponentWrapper>
      <Hero />
      <ServiceCarousel services={featuredServices} />
      <div className='py-10 md:py-16'>
        <SectionTitleWithSubTitle
          title='Safely Empower Your Digital Business'
          subTitle='Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites'
        />
        {/* <SubscriptionTable />  */}
        <PricingTable
          services={standardProducts}
          subscriptions={subscriptionsProducts}
        />
      </div>
      <GlobalProjectsMap />
      <FAQ items={[7, 1, 4, 6, 10]} />
    </ComponentWrapper>
  );
};

export default page;
