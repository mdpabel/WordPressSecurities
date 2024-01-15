'use server';

import { login } from '@/swell/account';
import { generateToken } from '../_actions';

export const loginToSwell = async (email: string) => {
  const { token } = await generateToken();
  const res = await login(email, token);
  console.log(res);

  return res;
};
