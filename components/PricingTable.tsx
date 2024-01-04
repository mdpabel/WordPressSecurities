'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { TickIcon } from '@/components/ui/icons';
import Spinner from '@/components/ui/Spinner';
import { client } from '@/lib/client';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { formatCurrency } from '@/lib/utils';

type PlanType = {
  price: number;
  features: string[];
};

type PricingColumnProps = {
  plan: PlanType;
  className?: string;
  subTitle: string;
  title: string;
};

export const PricingColumn = ({
  plan,
  className = '',
  subTitle,
  title,
}: PricingColumnProps) => {
  const searchParams = useSearchParams();
  const selectedItems = searchParams.get('items')?.trim() ?? '2';
  const [loading, setLoading] = useState(false);
  const { isSignedIn } = useUser();
  const { features, price } = plan;

  const showBuyNowButton = isSignedIn;
  const showCreateAccountButton = !isSignedIn;

  const handlePayment = async () => {
    try {
      setLoading(true);
      const data = await client(`/api/payment?items=${selectedItems}`);
      const stripeInit = import('@stripe/stripe-js');
      const stripe = await (
        await stripeInit
      ).loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

      stripe?.redirectToCheckout({
        sessionId: data.sessionId,
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg_primary rounded-lg border border-gray-100 shadow  ${className}`}>
      <div className=''>
        <h3 className='mb-4 text-2xl font-semibold'>{title}</h3>
        <p className='font-light text-gray-700 sm:text-lg '>{subTitle}</p>
        <div className='flex justify-center items-baseline my-8'>
          <span className='mr-2 text-5xl font-extrabold'>
            {formatCurrency({
              amount: price,
            }) ?? '$0.00'}
          </span>
          <span className='text-gray-500 '>/onetime</span>
        </div>
      </div>
      <ul role='list' className='mb-8 space-y-4 text-left'>
        {features.map((service, index) => (
          <li key={index} className='flex items-center space-x-3'>
            <TickIcon />
            <span>{service}</span>
          </li>
        ))}
      </ul>
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
          <Link href='/register'>Get started</Link>
        </Button>
      )}
    </div>
  );
};

type ServiceItemType = {
  title: string;
  price: number;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ServiceItem = ({ title, price, id, onChange }: ServiceItemType) => {
  return (
    <li className='w-full border-b border-gray-200 rounded-t-lg'>
      <div className='flex items-center pl-3'>
        <input
          onChange={onChange}
          id={title}
          value={id}
          type='checkbox'
          defaultChecked={price == 0}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
        />
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

type ProductTitleAndPrice = {
  title: string;
  price: number;
  id: string;
};

type PropType = {
  services: ProductTitleAndPrice[];
};

const PricingTable = ({ services }: PropType) => {
  const freeServices = services
    .filter((service) => service.price === 0)
    .map((service) => service.id);

  const [items, setItems] = useState(freeServices);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemsCopy = [...items];
    const checked = e.target.checked;
    const id = e.target.value;

    if (checked) {
      itemsCopy.push(id);
    } else {
      const idx = itemsCopy.indexOf(id);
      itemsCopy.splice(idx, 1);
    }
    setItems([...itemsCopy]);
  };

  const selectedServices = services.filter(
    (service) => items.indexOf(service.id) > -1,
  );

  const features = selectedServices.map((s) => s.title);

  let totalPrice = selectedServices.reduce(
    (total, service) => service.price + total,
    0,
  );

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
            onChange={handleChecked}
          />
        ))}
      </ul>
      <div className='col-span-1'>
        <PricingColumn
          plan={{
            features: features,
            price: totalPrice,
          }}
          title='Adapting to Your Needs'
          subTitle='Customizable Protection Plans for Unyielding WordPress Safety'
          className='w-full max-w-full'
        />
      </div>
    </section>
  );
};

export default PricingTable;
