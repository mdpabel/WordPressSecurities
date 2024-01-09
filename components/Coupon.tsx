'use client';
// import { useFormState, useFormStatus } from 'react-dom';
// import { handleCoupon } from '@/app/_actions';
import useToggle from '@/hooks/useToggle';
import Spinner from './ui/Spinner';
import { useCart } from '@/zustand/cart';
import { useState } from 'react';
import { applyCoupon, removeCoupon } from '@/swell/discount';
import { z } from 'zod';

const couponSchema = z
  .string()
  .min(3, { message: 'Coupon code must be at least 3 characters long' })
  .max(20, {
    message: 'Coupon code must not exceed 20 characters',
  });

const Coupon = () => {
  const { cart } = useCart();
  const couponCode = cart?.couponCode;

  console.log(cart);

  return couponCode ? <RemoveCoupon /> : <ApplyCoupon />;
};

const RemoveCoupon = () => {
  const { cart } = useCart();
  const couponCode = cart?.couponCode;
  const itemDiscount = cart?.itemDiscount ?? 0;
  const [pending, setPending] = useState(false);

  const handleRemmoveCoupon = async () => {
    if (!couponCode) return;
    setPending(true);
    const cart = await removeCoupon(couponCode);

    useCart.setState({
      cart,
    });
    setPending(false);
  };

  return (
    <div className='flex items-center gap-2 py-4'>
      <p className='text-left underline cursor-pointer'>
        Great! ${itemDiscount} discount with code{' '}
        <span className='text-blue-500 font-semibold'>'{couponCode}'</span> has
        been applied.
      </p>
      <button
        onClick={handleRemmoveCoupon}
        type='submit'
        name='intent'
        value='remove'
        className='border px-3 py-1 rounded border-gray-500'>
        {pending ? <Spinner /> : 'Remove'}
      </button>
    </div>
  );
};

const ApplyCoupon = () => {
  const { cart } = useCart();
  const couponCode = cart?.couponCode;
  const { setTrue, value } = useToggle(Boolean(couponCode));
  const [coupon, setCoupon] = useState('');
  const [pending, setPending] = useState(false);

  const handleApplyCoupon = async () => {
    setPending(true);
    const parsedCoupon = couponSchema.parse(coupon);

    const cart = await applyCoupon(parsedCoupon);
    console.log(cart);
    useCart.setState({
      cart,
    });
    setPending(false);
  };

  return (
    <div className='py-4'>
      {!value && (
        <p onClick={setTrue} className='text-left underline cursor-pointer'>
          Do you have a coupon code?
        </p>
      )}
      {value && (
        <div className='flex gap-2 items-center'>
          <input
            onChange={(e) => setCoupon(e.target.value)}
            type='text'
            name='coupon'
            placeholder='Coupon code'
            className='border border-gray-500 rounded py-1 px-2 outline-none placeholder:text-sm'
          />

          <button
            onClick={handleApplyCoupon}
            type='submit'
            name='intent'
            value='apply'
            className='border px-3 py-1 rounded border-gray-500'>
            {pending ? <Spinner /> : 'Apply'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Coupon;
