import 'server-only';

import { getUser } from './account.server';
import { OrderSnake } from 'swell-js/types/order/snake';
import swell from './server';
import { cache } from 'react';

export const getOrders = cache(
  async ({
    limit = 25,
    page = 1,
  }: {
    limit?: number;
    page?: number;
  } = {}) => {
    const user = await getUser();

    if (!user || !user?.id) {
      throw new Error('Please login to perform this operation');
    }

    const res = await swell.get('/orders', {
      where: {
        account_id: user.id,
      },
      limit: limit,
      page: page,
    });

    return res?.results as OrderSnake[];
  },
);
