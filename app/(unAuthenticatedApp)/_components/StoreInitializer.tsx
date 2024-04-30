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
    if (!initialized.current) {
      getCart();
      initialized.current = true;
    }
  }, []);

  return null;
};

export default StoreInitializer;
