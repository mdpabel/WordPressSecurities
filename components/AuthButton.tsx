'use client';
import Button from '@/components/Button';
import React, { ReactNode, useEffect } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import Spinner from './Spinner';

const AuthButton = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type='submit'>
      {children} {pending && <Spinner />}
    </Button>
  );
};

export default AuthButton;
