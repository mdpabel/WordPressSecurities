'use server';

import { currentUser } from '@clerk/nextjs';
import swell from '@/swell/server';

export const generateToken = async () => {
  const user = await currentUser();

  if (!user) {
    return { success: false, error: 'You are not authorized' };
  }

  const emails = user?.emailAddresses;
  const primaryEmailId = user?.primaryEmailAddressId;
  const primaryEmail = emails.find((email) => email.id === primaryEmailId);
  const email = primaryEmail?.emailAddress;

  if (!email) {
    return { success: false, error: 'User email not found' };
  }

  const { password_token } = await swell.put(`/accounts/${email}`, {
    password_token: null,
  });

  return { success: true, token: password_token };
};
