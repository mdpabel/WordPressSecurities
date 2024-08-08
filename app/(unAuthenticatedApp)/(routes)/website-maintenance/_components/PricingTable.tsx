import { Button } from '@/components/Button';
import { TickIcon } from '@/components/icons';
import { SectionTitleWithSubTitle } from '@/components/Title';
import React from 'react';
import PricingTableItems from './PricingTableItems';

const PricingTable = () => {
  return (
    <div className='pt-8'>
      <SectionTitleWithSubTitle
        title='Safely Empower Your Digital Business'
        subTitle='Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites'
      />
      <div className='space-y-4 md:space-y-0 grid grid-cols-1 md:grid-cols-3 pt-10'>
        <div className='flex flex-col justify-between space-y-4 shadow-sm p-10 border rounded-2xl'>
          <h2 className='font-medium text-xl'>Basic</h2>
          <p className='text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, repellendus!
          </p>
          <p>
            <span className='font-semibold text-4xl'>$24</span>/month
          </p>
          <PricingTableItems />
          <Button
            style={{
              background: '#fff',
            }}
            className='border border-black text-black'>
            Buy plan
          </Button>
        </div>

        <div className='relative flex flex-col justify-between space-y-4 shadow p-10 border rounded-2xl transform overflow-hidden scale-y-110'>
          <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl'>Basic</h2>
            <span className='top-[25px] -right-[30px] absolute px-10 py-1 font-semibold text-white transform rotate-45 website-maintenance'>
              Popular
            </span>
          </div>
          <p className='text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, repellendus!
          </p>
          <p>
            <span className='font-semibold text-4xl'>$24</span>/month
          </p>
          <PricingTableItems />
          <Button className='website-maintenance'>Buy plan</Button>
        </div>

        <div className='flex flex-col justify-between space-y-4 shadow-sm p-10 border rounded-2xl'>
          <h2 className='font-medium text-xl'>Basic</h2>
          <p className='text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, repellendus!
          </p>
          <p>
            <span className='font-semibold text-4xl'>$24</span>/month
          </p>
          <PricingTableItems />
          <Button
            style={{
              background: '#fff',
            }}
            className='border border-black text-black'>
            Buy plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
