'use client';

import { cn } from '@/lib/utils';
import { PricingTableProps } from '../../_types/pricing.type';
import PricingColumn from './PricingColumn';
import ServiceItem from './ServiceItem';
import PricingTablePrice from './PricingTablePrice';
import { usePricing } from '@/hooks/usePricing';
import { Button } from '@/components/Button';
import Coupon from './Coupon';
import Spinner from '@/components/Spinner';
import Link from 'next/link';

const PricingTable = ({
  services,
  subscriptions,
  hideColumn = false,
}: PricingTableProps) => {
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
    <section
      id='instant'
      className={cn(
        !hideColumn &&
          'grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 pt-5',
      )}>
      <ul className='col-span-1 rounded-lg font-medium text-gray-900 text-sm'>
        {hideColumn && <PricingTablePrice services={services} />}

        {services?.map((service) => (
          <ServiceItem
            key={service.id}
            id={service.id}
            title={service.title}
            price={service.price}
            originalPrice={service.originalPrice}
          />
        ))}
      </ul>

      {!hideColumn && (
        <div className='col-span-1'>
          <PricingColumn
            subscriptions={subscriptions}
            services={services}
            title='Adapting to Your Needs'
            subTitle='Customizable Protection Plans for Unyielding WordPress Safety'
            className='w-full max-w-full'
          />
        </div>
      )}

      <div className='pt-6'>
        {hideColumn && showCouponComponent && <Coupon />}
        {hideColumn && showBuyNowButton && (
          <Button
            variant='outline'
            onClick={handlePayment}
            className='flex justify-center border border-black'>
            {loading ? <Spinner className='text-black' /> : 'Buy now'}
          </Button>
        )}

        {hideColumn && showCreateAccountButton && (
          <Button asChild className='flex justify-center' variant='outline'>
            <Link href='/login'>Sign in to Checkout</Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default PricingTable;
