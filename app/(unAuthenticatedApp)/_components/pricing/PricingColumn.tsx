'use client';
import React, { useEffect } from 'react';
import { TickIcon } from '@/components/icons';
import Spinner from '@/components/Spinner';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import { CartItemCamel } from 'swell-js/types/cart/camel';
import { Subscriptions } from '@/swell/product';
import { useCart } from '@/zustand/cart';
import { useAsync } from '@/hooks/useAsync';
import Coupon from './Coupon';
import { usePricing } from '@/hooks/usePricing';
import ProductQuantity from './ProductQuantity';
import { PricingColumnProps } from '../../_types/pricing.type';
import PricingTablePrice from './PricingTablePrice';

export const PricingColumn = ({
  services,
  className = '',
  subTitle,
  title,
}: PricingColumnProps) => {
  const {
    handlePayment,
    loading,
    selectedServices,
    showBuyNowButton,
    showCouponComponent,
    showCreateAccountButton,
  } = usePricing({
    services,
  });

  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg_primary rounded-lg border border-gray-100 shadow  ${className}`}>
      <div className=''>
        <h3 className='mb-2 text-2xl font-semibold'>{title}</h3>
        <p className='font-light text-gray-800 sm:text-lg '>{subTitle}</p>

        {/* <ProductQuantity />  */}

        <PricingTablePrice services={services} />
      </div>
      <ul role='list' className='mb-8 space-y-2 text-left'>
        {selectedServices.map((service, index) => (
          <li key={index} className='flex items-center space-x-3'>
            <TickIcon />
            <span>{service.title}</span>
          </li>
        ))}
      </ul>
      {showCouponComponent && <Coupon />}
      {showBuyNowButton && (
        <Button
          variant='outline'
          onClick={handlePayment}
          className='flex justify-center border border-black'>
          {loading ? <Spinner className='text-black' /> : 'Buy now'}
        </Button>
      )}

      {showCreateAccountButton && (
        <Button asChild className='flex justify-center' variant='outline'>
          <Link href='/login'>Sign in to Checkout</Link>
        </Button>
      )}
    </div>
  );
};

export default PricingColumn;
