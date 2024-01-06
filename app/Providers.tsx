'use client';

import { CartProvider } from '@/context/cartProvider';
import NProgressBar from '@/components/ui/NProgressBar';
import { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NProgressBar>
      <CartProvider>{children}</CartProvider>
    </NProgressBar>
  );
};

export default Providers;
