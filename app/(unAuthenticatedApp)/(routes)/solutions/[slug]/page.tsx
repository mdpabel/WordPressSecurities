import ComponentWrapper from '@/components/ComponentWrapper';
import { Title } from '@/components/Title';
import React from 'react';
import PricingTable from '@/app/(unAuthenticatedApp)/_components/pricing/PricingTable';
import ModifiedPricingTable from './_components/PricingTable';
import FAQ from '@/app/(unAuthenticatedApp)/_components/FAQ';
import Carousel from './_components/Carousel';
import {
  getProductByIdAndSlug,
  getProducts,
  getStandardProducts,
} from '@/swell/product';
import GlobalProjectsMap from '@/app/(unAuthenticatedApp)/_components/GlobalProjectsMap';

export const dynamic = 'force-static';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const services = await getProducts();

  return services.map((service) => ({
    slug: service?.slug,
  }));
}

const Solution = async ({ params }: Props) => {
  const services = await getStandardProducts();
  const service = await getProductByIdAndSlug(params?.slug);

  const images =
    service.images?.map((img) => ({
      src: img?.file?.url ?? '',
      alt: service?.name ?? '',
      height: img?.file?.height ?? 400,
      width: img?.file?.width ?? 600,
    })) ?? [];

  return (
    <ComponentWrapper className='pt-10'>
      <div className='grid grid-cols-3 space-x-8'>
        <div className='col-span-3 md:col-span-2 space-y-6'>
          <Title className='text-2xl md:text-3xl'>{service?.name}</Title>
          <Carousel images={images} />
          <div className='md:hidden pt-10'>
            <PricingTable subscriptions={[]} services={services} />
          </div>
          <div className='pt-5 md:pt-20 space-y-4'>
            <Title>About this service</Title>
            <div
              className='prose max-w-full'
              dangerouslySetInnerHTML={{
                __html: service?.description ?? '',
              }}
            />
          </div>
          <div>
            <Title>Frequently Asked Questions</Title>
            <FAQ title={false} items={[1, 2, 3, 4, 5]} />
          </div>
          <GlobalProjectsMap />
        </div>
        <div className='hidden md:block col-span-1'>
          <PricingTable
            subscriptions={[]}
            services={services}
            hideColumn={true}
          />
        </div>
      </div>
      <div className='mt-5 md:mt-10'>
        <Title>More services by WordPressSecurities</Title>
      </div>
    </ComponentWrapper>
  );
};

export default Solution;
