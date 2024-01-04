import React from 'react';
import ServiceItem from './ServiceItem';
import Button from '@/components/ui/Button';
import OrderHeader from './OrderHeader';
import { type Order } from '@prisma/client';
import { services } from '@/app/api/payment/route';
import { Card } from '@/components/ui/Card';

const Order = ({ order }: { order: Order }) => {
  const itemsId = order.product_ids.split(',').map(Number) ?? [];

  const selectedServices = services.filter(
    (service) => itemsId.indexOf(service.id) > -1,
  );

  return (
    <Card className='p-4 md:p-8 rounded shadow'>
      <OrderHeader
        status={order.order_status}
        createAt={order?.createAt}
        orderId={order?.id}
        price={order?.amount}
      />

      <div className='mt-5'>
        <h2 className='mb-5'>Order details</h2>
        <ul>
          {selectedServices.map((service) => (
            <ServiceItem
              key={service.id}
              label={service.label}
              price={service.price}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Order;
