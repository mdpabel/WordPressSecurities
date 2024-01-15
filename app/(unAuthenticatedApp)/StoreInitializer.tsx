'use client';
import { useCart } from '@/zustand/cart';
import { useRef, useEffect } from 'react';

const StoreInitializer = () => {
  const initialized = useRef(false);
  const { getCart } = useCart();

  useEffect(() => {
    useCart.persist.rehydrate();
  }, []);

  useEffect(() => {
    getCart();
  }, [getCart]);

  return null;
};

export default StoreInitializer;
