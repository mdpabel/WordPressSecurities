import swell from './client';

export const login = async (email: string, token: string) => {
  const res = await swell.account.login(email, {
    password_token: token,
  });

  return {
    success: true,
  };
};

export const logout = async () => {
  const res = await swell.account.logout();
  return {
    success: true,
  };
};

export const getLoggedInAccount = async () => {
  return await swell.account.get();
};

export const getSwellSession = async () => {
  return await swell.session.get();
};
