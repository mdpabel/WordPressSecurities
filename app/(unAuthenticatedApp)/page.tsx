import lazy from 'next/dynamic';
import ComponentWrapper from '@/components/ComponentWrapper';
import Hero from './_components/Hero';
import ServiceCarousel from './_components/ServiceCarousel';
import FAQ from '@/app/(unAuthenticatedApp)/_components/FAQ';
import { SectionTitleWithSubTitle } from '@/components/Title';
import PricingTable from '@/app/(unAuthenticatedApp)/_components/pricing/PricingTable';
import {
  getCategories,
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

const page = async () => {
  return (
    <ComponentWrapper>
      <Hero
        title='Transform Your WordPress Site with Expert Care'
        description='From impenetrable security to lightning-fast speed, we bring you cutting-edge WordPress solutions to power your success.'
        buttonText='Fix hacked site'
        buttonLink='/'
        image={{
          src: '/hero/home.png',
          alt: 'Next Generation WordPress',
        }}
      />
      <ServiceCarousel />
      <GlobalProjectsMap />
      <FAQ items={[7, 1, 4, 6, 10]} />
    </ComponentWrapper>
  );
};

export default page;
