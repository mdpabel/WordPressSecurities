import { Subscriptions } from '@/swell/product';

export type PricingTableProps = {
  services: ProductTitleAndPrice[];
  subscriptions: SubscriptionProducts;
  hideColumn?: boolean;
};

export type ServiceItemType = {
  title: string;
  originalPrice: number | undefined;
  price: number;
  id: string;
};

type ProductTitleAndPrice = {
  title: string;
  price: number;
  originalPrice: number | undefined;
  id: string;
};

export type SubscriptionProducts = {
  id: string;
  title: string;
  subscriptions: Subscriptions;
}[];

export type PricingColumnProps = {
  services: ProductTitleAndPrice[];
  subscriptions: SubscriptionProducts;
  className?: string;
  subTitle: string;
  title: string;
};

export type services = ProductTitleAndPrice[];
