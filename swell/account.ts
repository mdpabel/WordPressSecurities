import swell from './client';

export const login = async (email: string, token: string) => {
  await swell.account.login(email, {
    password_token: token,
  });
  return {
    success: true,
  };
};

export const logout = async () => {
  await swell.account.logout();
  return {
    success: true,
  };
};
