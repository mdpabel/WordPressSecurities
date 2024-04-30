'use client';

import { cn } from '@/lib/utils';
import { PricingTableProps } from '../../_types/pricing.type';
import PricingColumn from './PricingColumn';
import ServiceItem from './ServiceItem';
import PricingTablePrice from './PricingTablePrice';

const PricingTable = ({
  services,
  subscriptions,
  hideColumn = false,
}: PricingTableProps) => {
  return (
    <section
      id='instant'
      className={cn(
        !hideColumn &&
          'grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 pt-5',
      )}>
      <ul className='col-span-1 text-sm font-medium text-gray-900 rounded-lg'>
        <PricingTablePrice services={services} />

        {services?.map((service) => (
          <ServiceItem
            key={service.id}
            id={service.id}
            title={service.title}
            price={service.price}
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
    </section>
  );
};

export default PricingTable;
