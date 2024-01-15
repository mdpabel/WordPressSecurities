import 'server-only';
import { currentUser } from '@clerk/nextjs';
import { cache } from 'react';
import { loginWithToken } from './account';

export const getUser = cache(async () => {
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;

  if (!user || !email) {
    throw new Error('User not found');
  }

  return await loginWithToken(email);
});
