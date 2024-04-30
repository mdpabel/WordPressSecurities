import Order from './Order';
import { getOrders } from '@/swell/orders.server';

const Orders = async () => {
  const data = await getOrders();

  return (
    <div className='space-y-6'>
      {data?.map((order) => <Order key={order?.id} order={order} />)}
    </div>
  );
};

export default Orders;
