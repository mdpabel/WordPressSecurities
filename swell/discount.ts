import swell from './client';

export const applyCoupon = async (coupon: string) => {
  if (!coupon) return;
  return await swell.cart.applyCoupon(coupon);
};

export const removeCoupon = async (coupon: string) => {
  if (!coupon) return;
  return await swell.cart.removeCoupon(coupon);
};
