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
import CompaniesLogo from './_components/CompaniesLogo';
const GlobalProjectsMap = lazy(
  () => import('@/app/(unAuthenticatedApp)/_components/GlobalProjectsMap'),
);

export const dynamic = 'force-static';

const page = async () => {
  return (
    <ComponentWrapper>
      <Hero
        title='The Zero-Risk Solution for Your Business'
        description='With 0 vulnerabilities, 0 downtime, and 0 errors, 3 Zero Tech ensures your business runs smoothly, securely, and without compromise'
        buttonText='Fix hacked site'
        buttonLink='/'
        image={{
          src: '/hero/home.png',
          alt: 'Next Generation WordPress',
        }}
      />
      <ServiceCarousel />
      <CompaniesLogo />
      <GlobalProjectsMap />
      <FAQ items={[7, 1, 4, 6, 10]} />
    </ComponentWrapper>
  );
};

export default page;
