import React from 'react';
import ServiceItem from './ServiceItem';
import OrderHeader from './OrderHeader';
import { services } from '@/app/api/payment/route';
import { Card } from '@/components/ui/Card';
import { OrderSnake } from 'swell-js/types/order/snake';

const Order = ({ order }: { order: OrderSnake }) => {
  const {
    payment_total,
    items,
    coupon_code,
    sub_total,
    discount_total,
    status,
    item_quantity,
    paid,
    currency,
    account_logged_in,
    date_created,
    id,
    number,
  } = order;

  return (
    <Card className='p-4 md:p-8 rounded shadow'>
      <OrderHeader
        status={status!}
        createAt={date_created!}
        orderId={number!}
        paymentTotal={Number(payment_total)}
        discount={discount_total!}
      />

      <div className='mt-5'>
        <h2 className='mb-5'>Order details</h2>
        <ul>
          {items?.map((service) => (
            <ServiceItem
              key={service.id}
              label={service.product_name!}
              price={service.price!}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Order;
