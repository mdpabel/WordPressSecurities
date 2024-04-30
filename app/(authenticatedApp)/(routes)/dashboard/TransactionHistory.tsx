import { Card } from '@/components/Card';
import { stripe } from '@/lib/stripe';
import { formatDate } from '@/lib/utils';
import React from 'react';

const TransactionHistory = async () => {
  const balanceTransactions = await stripe.balanceTransactions.list({
    limit: 3,
  });

  const data = balanceTransactions.data.map((d) => {
    return {
      fee: d.fee / 100,
      process: d.description,
      createdAt: formatDate(new Date(d.created * 1000)),
      amount: d.amount / 100,
    };
  });

  return (
    <Card className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase '>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Process
            </th>
            <th scope='col' className='px-6 py-3'>
              createdAt
            </th>
            <th scope='col' className='px-6 py-3'>
              Amount
            </th>
            <th scope='col' className='px-6 py-3'>
              Fee
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ amount, createdAt, fee, process }, index) => (
            <tr key={index} className='border-b  '>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                {process}
              </th>
              <td className='px-6 py-4'>{createdAt}</td>
              <td className='px-6 py-4'>${amount}</td>
              <td className='px-6 py-4'>${fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default TransactionHistory;
