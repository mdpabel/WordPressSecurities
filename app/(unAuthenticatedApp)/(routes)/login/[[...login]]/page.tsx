'use client';
import { SyntheticEvent, useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import AuthForm from '@/app/(unAuthenticatedApp)/_components/auth/authForm';
import { useToast } from '@/components/use-toast';
import { catchClerkError } from '@/lib/utils';
import { login } from '@/swell/account';
import { useCfTurnstile } from '@/app/(unAuthenticatedApp)/_components/auth/useCFTurnstile';

export default function Page() {
  const { toast } = useToast();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { isVerified: turnstileTokenVeification } = useCfTurnstile();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded || !turnstileTokenVeification) {
      console.log('turnstileTokenVeification ', turnstileTokenVeification);
      console.log('isLoaded ', isLoaded);
      return;
    }

    try {
      setLoading(true);
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        const res = await login({
          email: emailAddress,
          password,
        });

        console.log('SWELL LOGIN, ', res);

        setLoading(false);
        toast({
          title: `Welcome back ${
            result.userData.firstName + ' ' + result.userData.lastName
          }`,
          description: 'You will be redirected to dashboard',
        });
      } else {
        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);
      const error = catchClerkError(err);
      toast({
        title: 'Authentication Error',
        description: error,
        variant: 'destructive',
      });
    }
  };

  return (
    <AuthForm
      loading={loading}
      handleSubmit={handleSubmit}
      modeType='login'
      setEmailAddress={setEmailAddress}
      setPassword={setPassword}
    />
  );
}
