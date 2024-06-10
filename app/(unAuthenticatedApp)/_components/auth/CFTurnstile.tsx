'use client';
import { Dispatch, SetStateAction } from 'react';
import Turnstile, { useTurnstile } from 'react-turnstile';
import { useCfTurnstile } from './useCFTurnstile';

const CFTurnstile = () => {
  const { verifyTurnstileToken } = useCfTurnstile();

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
