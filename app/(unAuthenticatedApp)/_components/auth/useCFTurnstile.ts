'use client';
import { useState } from 'react';
import { useTurnstile } from 'react-turnstile';

type Response = { success: boolean };

export const useCfTurnstile = () => {
  const [isVerified, setIsVerified] = useState(false);
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

      setIsVerified(data.success);
    } catch (error) {
      turnstile.reset();
      setIsVerified(false);
    }
  };

  return {
    isVerified,
    verifyTurnstileToken,
  };
};
