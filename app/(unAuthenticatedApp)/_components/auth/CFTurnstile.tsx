'use client';
import { Dispatch, SetStateAction } from 'react';
import Turnstile, { useTurnstile } from 'react-turnstile';

type Response = { success: boolean };

const CFTurnstile = ({
  setIsTokenVerified,
}: {
  setIsTokenVerified: Dispatch<SetStateAction<boolean>>;
}) => {
  const turnstile = useTurnstile();

  const verifyTurnstileToken = async (token: string | undefined) => {
    if (!token) return;
    try {
      const response = await fetch('/api/turnstile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data: Response = await response.json();

      setIsTokenVerified(data.success);
    } catch (error) {
      turnstile.reset();
      setIsTokenVerified(false);
    }
  };

  return (
    <Turnstile
      className='cf-turnstile'
      sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITEKEY!}
      theme='light'
      onVerify={(token) => {
        verifyTurnstileToken(token);
      }}
    />
  );
};

export default CFTurnstile;
