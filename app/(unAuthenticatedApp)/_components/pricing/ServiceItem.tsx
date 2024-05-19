import { useAsync } from '@/hooks/useAsync';
import { ServiceItemType } from '../../_types/pricing.type';
import { useCart } from '@/zustand/cart';
import { CartItemCamel } from 'swell-js/types/cart/camel';
import Spinner from '@/components/Spinner';

const ServiceItem = ({ title, price, id, originalPrice }: ServiceItemType) => {
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
    <li className='border-gray-200 border-b rounded-t-lg w-full'>
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
            className='border-gray-300 bg-gray-100 rounded w-4 h-4 text-blue-600 focus:ring-blue-500'
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
            className='border-gray-300 bg-gray-100 rounded w-4 h-4 text-blue-600 focus:ring-blue-500'
          />
        )}
        <label
          htmlFor={title}
          className='flex justify-between ml-2 py-3 w-full font-medium text-base text-gray-900'>
          <span>{title}</span>
          <div>
            <div className='flex items-center'>
              {originalPrice && price ? (
                <>
                  <span className='mr-2 font-bold'>${price}</span>
                  <span className='text-base text-gray-500 line-through'>
                    ${originalPrice}
                  </span>
                </>
              ) : (
                <>
                  <span className='mr-2 font-bold'>${price}</span>
                </>
              )}
            </div>
          </div>
        </label>
      </div>
    </li>
  );
};

export default ServiceItem;
