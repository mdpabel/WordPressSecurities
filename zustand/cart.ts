import { Cart } from 'swell-js';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import swell from '@/swell/client';
import { cache } from 'react';

export type AddToCart = {
  productId: string;
  quantity?: number;
  purchaseOption?: {
    type: 'standard' | 'subscription';
    planId: string;
  };
};

export type UpdateCart = {
  productId: string;
  quantity: number;
};

export type Action = {
  addToCart: (item: AddToCart) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  updateCart: (id: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getCart: () => Promise<void>;
};

export type State = {
  cart: Cart | null;
  loading: boolean;
  error: Error | null;
};

export const useCart = create<State & Action>()(
  persist(
    (set) => ({
      cart: null,
      error: null,
      loading: false,
      addToCart: async (item: AddToCart) => {
        set({
          loading: true,
        });
        const options = {
          productId: item.productId,
          quantity: item.quantity || 1,
          purchaseOption: item.purchaseOption || {
            type: 'standard',
          },
        };

        const cart = await swell.cart.addItem(options);

        set({
          cart,
          loading: false,
        });
      },
      removeFromCart: async (productId: string) => {
        set({
          loading: true,
        });

        const cart = await swell.cart.removeItem(productId);

        set({
          cart,
          loading: false,
        });
      },
      updateCart: async (productId: string, quantity: number) => {
        set({
          loading: true,
        });

        const cart = await swell.cart.updateItem(productId, {
          quantity,
        });

        set({
          cart,
          loading: false,
        });
      },
      clearCart: async () => {
        set({
          loading: true,
        });

        const cart = await swell.cart.setItems([]);

        set({
          cart,
          loading: false,
        });
      },
      getCart: async () => {
        set({
          loading: true,
        });

        const cart = await swell.cart.get();

        set({
          cart,
          loading: false,
        });
      },
    }),
    {
      name: 'cart',
      skipHydration: true,
    },
  ),
);
