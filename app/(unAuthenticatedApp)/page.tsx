import lazy from 'next/dynamic';
import ComponentWrapper from '@/components/ui/ComponentWrapper';
import Hero from './Hero';
import ServiceCarousel from '../../components/ServiceCarousel';
import FAQ from '@/components/FAQ';
import { SectionTitleWithSubTitle } from '@/components/ui/Title';
import PricingTable from '@/components/PricingTable';
import {
  getProducts,
  getStandardProducts,
  getSubscriptionsBasedProducts,
} from '@/swell/product';
import { useCart } from '@/zustand/cart';
import SubscriptionTable from '@/components/SubscriptionTable';
const GlobalProjectsMap = lazy(() => import('@/components/GlobalProjectsMap'));
// import GlobalProjectsMap from '@/components/GlobalProjectsMap';

export const dynamic = 'force-static';

const noImage = '/images/fourOfour.jpg';

const page = async () => {
  const subscriptionsProducts = await getSubscriptionsBasedProducts();
  const standardProducts = await getStandardProducts();
  const featuredProducts = await getProducts({
    category: 'featured',
  });

  const featuredServices = featuredProducts?.map((product) => ({
    id: product?.id ?? '',
    pricingTableId: [product?.id ?? ''],
    imgUrl: product?.images![0]?.file?.url ?? noImage,
    imgWidth: product?.images![0]?.file?.width,
    imgHeight: product?.images![0]?.file?.height,
    title: product?.name,
    description: product?.description ?? '',
    slug: product?.slug ?? '',
  }));

  return (
    <ComponentWrapper>
      <Hero />
      <ServiceCarousel services={featuredServices} />
      <div className='py-10'>
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
