import prisma from '@/prisma/prisma';
import Order from './Order';
import { currentUser, RedirectToSignIn } from '@clerk/nextjs';
import { Title } from '@/components/ui/Title';
import { getOrders } from '@/swell/order';

const Orders = async () => {
  const orders = await getOrders();

  console.log(orders);

  return (
    <div className='space-y-4'>
      <Title>All Orders</Title>
      <div className='space-y-6'>
        {/* {orders?.map((order) => <Order key={order.id} order={order} />)} */}
      </div>
    </div>
  );
};

export default Orders;
