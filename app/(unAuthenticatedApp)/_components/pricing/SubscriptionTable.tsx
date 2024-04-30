import { getSubscriptionsBasedProducts } from '@/swell/product';
import React from 'react';
import { Button } from '../../../../components/Button';
import { Card } from '../../../../components/Card';
import { formatCurrency } from '@/lib/utils';

const SubscriptionTable = async () => {
  const subscriptions = await getSubscriptionsBasedProducts();

  console.log(subscriptions[0].subscriptions.plans[0]);

  const plans = subscriptions[0]?.subscriptions?.plans?.map((plan) => ({
    count: plan?.billingSchedule?.intervalCount,
    interval: plan?.billingSchedule?.interval === 'monthly' ? 'Months' : 'Year',
    price: formatCurrency({
      amount: plan?.price,
    }),
  }));

  return (
    <div>
      <Card className='grid grid-cols-1 md:grid-cols-5 gap-6 p-6'>
        <ul className='md:col-span-3 list-inside'>
          <li className='w-full border-b border-gray-200 rounded-t-lg'>
            <div className='flex items-center pl-3'>
              <input
                type='checkbox'
                checked
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
              />
              <label className='w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nam.
              </label>
            </div>
          </li>
          <li className='w-full border-b border-gray-200 rounded-t-lg'>
            <div className='flex items-center pl-3'>
              <input
                type='checkbox'
                checked
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
              />
              <label className='w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nam.
              </label>
            </div>
          </li>
          <li className='w-full border-b border-gray-200 rounded-t-lg'>
            <div className='flex items-center pl-3'>
              <input
                type='checkbox'
                checked
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
              />
              <label className='w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nam.
              </label>
            </div>
          </li>
          <li className='w-full border-b border-gray-200 rounded-t-lg'>
            <div className='flex items-center pl-3'>
              <input
                type='checkbox'
                checked
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
              />
              <label className='w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nam.
              </label>
            </div>
          </li>
          <li className='w-full border-b border-gray-200 rounded-t-lg'>
            <div className='flex items-center pl-3'>
              <input
                type='checkbox'
                checked
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
              />
              <label className='w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, nam.
              </label>
            </div>
          </li>
        </ul>
        <ul className='md:col-span-2 space-y-3'>
          {plans.map((plan, idx) => (
            <li key={idx}>
              <Button variant='outline' className='w-full h-10'>
                {plan.price + ' / ' + plan.count + ' ' + plan?.interval}
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default SubscriptionTable;
