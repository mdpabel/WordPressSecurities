'use client';

import { useOrder } from '@/zustand/order';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const StoreInitializer = () => {
  const router = useRouter();
  const { getOrders } = useOrder();

  useEffect(() => {
    getOrders();
  }, []);

  return null;
};

export default StoreInitializer;
