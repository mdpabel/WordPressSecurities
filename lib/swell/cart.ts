import { AddToCart, UpdateCart } from '@/zustand/cart';
import swell from './client';

export const addToCart = async ({
  productId,
  purchaseOption,
  quantity,
}: AddToCart) => {
  const options = {
    productId,
    quantity: quantity || 1,
    purchaseOption: purchaseOption || {
      type: 'standard',
    },
  };

  const res = await swell.cart.addItem(options);
  console.log(res);
  return res;
};

export const removeFromCart = async (productId: string) => {
  return await swell.cart.removeItem(productId);
};

export const updateCart = async ({ productId, quantity }: UpdateCart) => {
  return await swell.cart.updateItem(productId, {
    quantity,
  });
};

export const clearCart = async () => {
  return await swell.cart.setItems([]);
};

export const getCart = async () => {
  return await swell.cart.get();
};
