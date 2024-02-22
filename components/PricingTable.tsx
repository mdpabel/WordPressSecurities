'use client';
import React, { useEffect } from 'react';
import { TickIcon } from '@/components/ui/icons';
import Spinner from '@/components/ui/Spinner';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import { CartItemCamel } from 'swell-js/types/cart/camel';
import { Subscriptions } from '@/swell/product';
import { useCart } from '@/zustand/cart';
import { useAsync } from '@/hooks/useAsync';
import Coupon from './Coupon';
import { usePricing } from '@/hooks/usePricing';
import ProductQuantity from './ProductQuantity';

type ProductTitleAndPrice = {
  title: string;
  price: number;
  id: string;
};

export type SubscriptionProducts = {
  id: string;
  title: string;
  subscriptions: Subscriptions;
}[];

type PricingColumnProps = {
  services: ProductTitleAndPrice[];
  subscriptions: SubscriptionProducts;
  className?: string;
  subTitle: string;
  title: string;
};

export const PricingColumn = ({
  services,
  className = '',
  subTitle,
  title,
  subscriptions,
}: PricingColumnProps) => {
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
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg_primary rounded-lg border border-gray-100 shadow  ${className}`}>
      <div className=''>
        <h3 className='mb-2 text-2xl font-semibold'>{title}</h3>
        <p className='font-light text-gray-700 sm:text-lg '>{subTitle}</p>

        {/* <ProductQuantity />  */}

        <div className='flex justify-center items-baseline mt-2 mb-4'>
          <span className='mr-2 text-5xl font-extrabold'>
            {formatCurrency({
              amount: price,
            }) ?? '$0.00'}
          </span>
          <span className='text-gray-500 '>/onetime</span>
        </div>
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

type ServiceItemType = {
  title: string;
  price: number;
  id: string;
};

const ServiceItem = ({ title, price, id }: ServiceItemType) => {
  const { isLoading, isSuccess, isIdle, isError, run } = useAsync();
  const { removeFromCart, addToCart, clearCart, cart, loading } = useCart();

  const cartItems = cart?.items?.map((item: CartItemCamel) => item.productId);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const productId = e.target.value;
    if (checked) {
      run(
        addToCart({
          productId,
        }),
      );
    } else {
      const item = cart?.items?.find(
        (item: CartItemCamel) => item.productId === productId,
      );
      if (!item?.id) return;

      run(removeFromCart(item?.id));
    }
  };

  return (
    <li className='w-full border-b border-gray-200 rounded-t-lg'>
      <div className='flex items-center pl-3'>
        {isLoading && <Spinner className='w-4 h-4' />}
        {isSuccess && (
          <input
            onChange={handleChecked}
            id={title}
            value={id}
            checked={cartItems?.includes(id)}
            type='checkbox'
            defaultChecked={price == 0}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
          />
        )}
        {isIdle && (
          <input
            onChange={handleChecked}
            id={title}
            value={id}
            type='checkbox'
            checked={cartItems?.includes(id)}
            defaultChecked={price == 0}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
          />
        )}
        <label
          htmlFor={title}
          className='w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between'>
          <span>{title}</span>
          <span className='font-bold'>${price}</span>
        </label>
      </div>
    </li>
  );
};

type PropType = {
  services: ProductTitleAndPrice[];
  subscriptions: SubscriptionProducts;
};

const PricingTable = ({ services, subscriptions }: PropType) => {
  return (
    <section
      id='instant'
      className='grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 pt-5'>
      <ul className='col-span-1 text-sm font-medium text-gray-900 rounded-lg'>
        {services?.map((service) => (
          <ServiceItem
            key={service.id}
            id={service.id}
            title={service.title}
            price={service.price}
          />
        ))}
      </ul>
      <div className='col-span-1'>
        <PricingColumn
          subscriptions={subscriptions}
          services={services}
          title='Adapting to Your Needs'
          subTitle='Customizable Protection Plans for Unyielding WordPress Safety'
          className='w-full max-w-full'
        />
      </div>
    </section>
  );
};

export default PricingTable;
