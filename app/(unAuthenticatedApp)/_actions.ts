'use server';

import { currentUser } from '@clerk/nextjs';
import swell from '@/swell/server';
import { applyCoupon, removeCoupon } from '@/swell/discount';
import { z } from 'zod';

export const generateToken = async () => {
  const user = await currentUser();

  if (!user) {
    return { success: false, error: 'You are not authorized' };
  }

  const emails = user?.emailAddresses;
  const primaryEmailId = user?.primaryEmailAddressId;
  const primaryEmail = emails.find((email) => email.id === primaryEmailId);
  const email = primaryEmail?.emailAddress;

  if (!email) {
    return { success: false, error: 'User email not found' };
  }

  const { password_token } = await swell.put(`/accounts/${email}`, {
    password_token: null,
  });

  return { success: true, token: password_token };
};

const couponSchema = z
  .string()
  .min(3, { message: 'Coupon code must be at least 3 characters long' })
  .max(20, {
    message: 'Coupon code must not exceed 20 characters',
  });

export const handleCoupon = async (prevState: any, formData: FormData) => {
  const couponInput = formData.get('coupon');
  const intent = formData.get('intent');

  const coupon = couponSchema.parse(couponInput);

  try {
    if (intent === 'apply') {
      await applyCoupon(coupon);
      return {
        success: true,
        message: 'Successfully applied coupon',
      };
    } else if (intent === 'remove') {
      await removeCoupon(coupon);
      return {
        success: true,
        message: 'Successfully applied coupon',
      };
    }
    throw new Error(`Invalid intent ${intent}`);
  } catch (error) {
    const err = error as Error;
    return {
      success: false,
      message: err?.message,
    };
  }
};
