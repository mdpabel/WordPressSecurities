import { generateToken } from '@/app/(unAuthenticatedApp)/_actions';
import swell from './client';

type Account = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export const login = async ({ email, password }: Account) => {
  console.log(email, password);
  return await swell.account.login(email, password);
};

export const loginWithToken = async (email: string) => {
  const { token } = await generateToken();
  return await swell.account.login(email, {
    password_token: token,
  });
};

export const createAccount = async ({
  email,
  firstName,
  lastName,
  password,
}: Account) => {
  console.log(email, password);
  return await swell.account.create({
    email,
    email_optin: true,
    password,
    first_name: firstName ?? '',
    last_name: lastName ?? '',
  });
};

export const logout = async () => {
  const res = await swell.account.logout();
  return {
    success: true,
  };
};

export const getUser = async () => {
  return await swell.account.get();
};
