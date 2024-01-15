import { Title } from '@/components/ui/Title';
import Orders from './Orders';

const OrdersPage = async () => {
  return (
    <div className='space-y-4'>
      <Title>All Orders</Title>
      <Orders />
    </div>
  );
};

export default OrdersPage;
