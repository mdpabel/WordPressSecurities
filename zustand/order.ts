import { create } from 'zustand';
import swell from '@/swell/client';
import { getOrders } from '@/swell/order';
import { Order } from 'swell-js';

type Action = {
  getOrders: () => Promise<swell.ResultsResponse<swell.Order>>;
  getOrder: (id: string) => Promise<swell.Order>;
};

type State = {
  orders: swell.ResultsResponse<swell.Order> | null;
  loading: boolean;
};

export const useOrder = create<State & Action>()((set, get) => ({
  orders: null,
  loading: false,
  getOrders: async () => {
    set({
      loading: true,
    });
    const orders = await swell.account.listOrders();
    set({
      orders,
      loading: false,
    });
    return orders;
  },
  getOrder: async (id: string) => {
    const order = get().orders?.results?.find((order) => order?.id === id);
    if (order) return order;
    return await swell.account.getOrder(id);
  },
}));
