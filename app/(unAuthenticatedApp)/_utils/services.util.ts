import { getProducts } from '@/swell/product';

const noImage = '/images/fourOfour.jpg';

export const getFeaturedServices = async () => {
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
    listOfServices: (product as any)?.list?.listOfServices as string,
    slug: product?.slug ?? '',
  }));

  return featuredServices;
};
