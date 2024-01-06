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

export const dynamic = 'force-static';
export const revalidate = 86400;

// id: number;
// pricingTableId: number[];
// imgUrl: string;
// title: string;
// subTitle: string;
// list: string[];
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
    title: product?.name,
    subTitle: product.description?.slice(0, 220) ?? '',
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
        <PricingTable
          services={standardProducts}
          subscriptions={subscriptionsProducts}
        />
      </div>
      <FAQ items={[7, 1, 4, 6, 10]} />
    </ComponentWrapper>
  );
};

export default page;
