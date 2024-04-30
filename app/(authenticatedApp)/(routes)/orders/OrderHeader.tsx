import { formatCurrency, formatDate } from '@/lib/utils';
import { Order } from '@prisma/client';
import clsx from 'clsx';
import React from 'react';

type PropType = {
  paymentTotal: number;
  discount: number;
  orderId: string;
  createAt: string;
  status:
    | 'pending'
    | 'draft'
    | 'payment_pending'
    | 'delivery_pending'
    | 'hold'
    | 'complete'
    | 'canceled';
};

const OrderHeader = ({
  discount,
  paymentTotal,
  orderId,
  createAt,
  status,
}: PropType) => {
  return (
    <div className='flex flex-col items-center md:flex-row space-y-5 md:space-y-0 justify-between border-b border-gray-500 pb-3'>
      <div className='flex md:space-x-12'>
        <div className='w-1/2 md:w-fit'>
          <h2>Order number</h2>
          <h3 className='w-2/3 md:w-fit text-gray-700 '>{orderId}</h3>
        </div>
        <div className='w-1/2 md:w-fit'>
          <h2>Order placed</h2>
          <h3 className='text-gray-700'>{formatDate(new Date(createAt))}</h3>
        </div>
        <div className='hidden md:block'>
          <h2>Total amount</h2>
          <p className='text-gray-700'>
            <span>
              {formatCurrency({
                amount: Number(paymentTotal),
              })}
            </span>
          </p>
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/2 md:w-fit block md:hidden'>
          <h2>Total amount</h2>
          <h3 className='text-gray-700'>
            {formatCurrency({
              amount: paymentTotal,
            })}
          </h3>
        </div>
        <div className='w-1/2 md:w-fit'>
          <h2
            className={clsx({
              'px-4 py-1 rounded text-white': true,
              'bg-green-700': status === 'complete',
              'bg-sky-700': status === 'pending' || 'payment_pending',
              'bg-red-500': status === 'canceled' || 'hold',
            })}>
            {status}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
