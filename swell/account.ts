import swell from './client';

export const login = async (email: string, token: string) => {
  const res = await swell.account.login(email, {
    password_token: token,
  });

  console.log(res);
  return {
    success: true,
  };
};

export const logout = async () => {
  const res = await swell.account.logout();
  console.log(res);
  return {
    success: true,
  };
};
