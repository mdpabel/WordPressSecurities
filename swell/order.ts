import swell from './client';

export const getOrders = async () => {
  return await swell.account.listOrders();
};

export const getOrder = async (id: string) => {
  if (!id) return;
  return await swell.account.getOrder(id);
};
