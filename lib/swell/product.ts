import { cache } from 'react';
import swell from './client';
import { capitalize, formatCurrency } from '../utils';

type GetProductsTypes = {
  category?: string;
};

export const getProducts = async ({ category }: GetProductsTypes = {}) => {
  const res = await swell.products.list({
    category,
  });

  const products = res?.results;

  return products;
};

export const getProductByIdAndSlug = cache(async (slugOrId: string) => {
  const product = await swell.products.get(slugOrId);

  return product;
});

export const getProductTitleAndSlug = async () => {
  const res = await getProducts();

  const filteredProducts = res?.filter((product) => product?.price! > 0);

  return filteredProducts?.map((product) => ({
    id: product?.id,
    title: capitalize(product?.name),
    href: product?.slug,
  }));
};

export const getTitleAndPrice = async () => {
  const res = await getProducts();

  return res?.map((product) => ({
    id: product?.id ?? '',
    title: capitalize(product?.name),
    price: product?.price ?? 0,
  }));
};
