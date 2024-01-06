import 'server-only';

import swell from './server';

export const getCart = async () => {
  return await swell.get('/carts');
};
