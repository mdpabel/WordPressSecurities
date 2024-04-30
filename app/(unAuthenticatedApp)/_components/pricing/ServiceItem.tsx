import { useAsync } from '@/hooks/useAsync';
import { ServiceItemType } from '../../_types/pricing.type';
import { useCart } from '@/zustand/cart';
import { CartItemCamel } from 'swell-js/types/cart/camel';
import Spinner from '@/components/Spinner';

const ServiceItem = ({ title, price, id }: ServiceItemType) => {
  const { isLoading, isSuccess, isIdle, isError, run } = useAsync();
  const { removeFromCart, addToCart, clearCart, cart, loading } = useCart();

  const cartItems = cart?.items?.map((item: CartItemCamel) => item.productId);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const productId = e.target.value;
    if (checked) {
      run(
        addToCart({
          productId,
        }),
      );
    } else {
      const item = cart?.items?.find(
        (item: CartItemCamel) => item.productId === productId,
      );
      if (!item?.id) return;

      run(removeFromCart(item?.id));
    }
  };

  return (
    <li className='w-full border-b border-gray-200 rounded-t-lg'>
      <div className='flex items-center pl-3'>
        {isLoading && <Spinner className='w-4 h-4' />}
        {isSuccess && (
          <input
            onChange={handleChecked}
            id={title}
            value={id}
            checked={cartItems?.includes(id)}
            type='checkbox'
            defaultChecked={price == 0}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
          />
        )}
        {isIdle && (
          <input
            onChange={handleChecked}
            id={title}
            value={id}
            type='checkbox'
            checked={cartItems?.includes(id)}
            defaultChecked={price == 0}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
          />
        )}
        <label
          htmlFor={title}
          className='w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between'>
          <span>{title}</span>
          <span className='font-bold'>${price}</span>
        </label>
      </div>
    </li>
  );
};

export default ServiceItem;
