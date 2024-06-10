'use client';
import Turnstile from 'react-turnstile';
import { useCfTurnstile } from './useCFTurnstile';
import { Dispatch, SetStateAction } from 'react';

const CFTurnstile = ({
  setTurnstileToken,
}: {
  setTurnstileToken: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Turnstile
      className='cf-turnstile'
      sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITEKEY!}
      theme='light'
      onVerify={(token) => {
        setTurnstileToken(token);
      }}
    />
  );
};

export default CFTurnstile;
