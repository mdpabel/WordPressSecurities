import { currentUser } from '@clerk/nextjs';
import swell from './client';

export const getOrders = async () => {
  return await swell.account.listOrders({
    limit: 10,
    page: 2,
  });
};

export const getOrder = async (id: string) => {
  if (!id) return;
  return await swell.account.getOrder(id);
};
