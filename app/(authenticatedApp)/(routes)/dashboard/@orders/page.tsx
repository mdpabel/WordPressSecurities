import { Card } from '@/components/Card';
import { stripe } from '@/lib/stripe';
import { formatCurrency, formatDate, formatDateAndTime } from '@/lib/utils';
import { getOrders } from '@/swell/orders.server';
import React from 'react';

import VisaCard from '@/public/pay-icons/visa.svg';
import MasterCard from '@/public/pay-icons/mastercard.svg';
import Paypal from '@/public/pay-icons/paypal.svg';
import CardIcon from './CardIcon';

const TransactionHistory = async () => {
  const orders = await getOrders({
    limit: 3,
    page: 1,
  });

  const data = orders.map((order) => ({
    id: order?.id,
    number: order?.number,
    amount: formatCurrency({
      amount: Number(order?.payment_total),
    }),
    last4: order?.billing?.card?.last4,
    brand: order?.billing?.card?.brand,
    orderPlaced: formatDate(new Date(order?.date_created!)),
  }));

  return (
    <Card className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-800 uppercase '>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Order number
            </th>
            <th scope='col' className='px-6 py-3'>
              Order placed
            </th>
            <th scope='col' className='px-6 py-3'>
              Payment
            </th>
            <th scope='col' className='px-6 py-3'>
              Total amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ amount, last4, id, number, orderPlaced, brand }) => (
            <tr key={id} className='border-b  '>
              <th
                scope='row'
                className='px-6 py-4 font-medium whitespace-nowrap '>
                {number}
              </th>
              <td className='px-6 py-4'>{orderPlaced}</td>
              <td className='px-6 py-4 space-x-2 flex items-center'>
                <CardIcon brand={brand} />
                <span>{last4}</span>
              </td>
              <td className='px-6 py-4'>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default TransactionHistory;
