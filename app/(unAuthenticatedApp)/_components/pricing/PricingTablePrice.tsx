import { usePricing } from '@/hooks/usePricing';
import React from 'react';
import { services } from '../../_types/pricing.type';
import { formatCurrency } from '@/lib/utils';

const PricingTablePrice = ({ services }: { services: services }) => {
  const {
    handlePayment,
    loading,
    price,
    selectedServices,
    showBuyNowButton,
    showCouponComponent,
    showCreateAccountButton,
  } = usePricing({
    services,
  });

  return (
    <div className='flex justify-center items-baseline mt-2 mb-4'>
      <span className='mr-2 text-5xl font-extrabold'>
        {formatCurrency({
          amount: price,
        }) ?? '$0.00'}
      </span>
      <span className='text-gray-500 '>/onetime</span>
    </div>
  );
};

export default PricingTablePrice;
