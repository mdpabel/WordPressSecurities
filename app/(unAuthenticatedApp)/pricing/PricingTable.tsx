'use client';
import PricingTableComponent from '@/components/PricingTable';
import { useCart } from '@/context/cartProvider';
import PricingTableLoadingSkeleton from './Skeleton';

type Services = {
  id: string;
  title: string;
  price: number;
}[];

type Props = {
  services: Services;
};

const PricingTable = ({ services }: Props) => {
  const { cart } = useCart();

  if (!cart) {
    return <PricingTableLoadingSkeleton />;
  }

  return <PricingTableComponent services={services} />;
};

export default PricingTable;
