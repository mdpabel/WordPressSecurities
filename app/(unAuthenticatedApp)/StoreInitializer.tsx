'use client';
import { useCart } from '@/zustand/cart';
import { useRef, useEffect } from 'react';

const StoreInitializer = () => {
  const initialized = useRef(false);
  const { getCart } = useCart();

  useEffect(() => {
    getCart().then(() => {
      console.log('DONE!');
    });
  }, [getCart]);

  return null;
};

export default StoreInitializer;
