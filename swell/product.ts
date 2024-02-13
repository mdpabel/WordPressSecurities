import { cache } from 'react';
import swell from './client';
import { capitalize, formatCurrency } from '../lib/utils';

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

export const getStandardProducts = async () => {
  const res = await getProducts();

  const products = res?.filter(
    (product) => !product?.purchaseOptions?.subscription,
  );

  return products?.map((product) => ({
    id: product?.id ?? '',
    title: capitalize(product?.name),
    price: product?.price ?? 0,
  }));
};

export type BillingSchedule = {
  interval: 'monthly' | 'yearly';
  intervalCount: number;
  limit: null | number;
  trialDays: number;
};

export type Plan = {
  name: string;
  description: null | string;
  price: number;
  billingSchedule: BillingSchedule;
  id: string;
};

export type Subscriptions = {
  plans: Plan[];
};

export const getSubscriptionsBasedProducts = async () => {
  const res = await getProducts();

  const products = res?.filter(
    (product) => product?.purchaseOptions?.subscription,
  );

  return products?.map((product) => ({
    id: product?.id ?? '',
    title: capitalize(product?.name),
    subscriptions: product?.purchaseOptions?.subscription as Subscriptions,
  }));
};
