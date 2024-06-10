'use client';
import ComponentWrapper from '@/components/ComponentWrapper';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import AuthForm from '@/app/(unAuthenticatedApp)/_components/auth/authForm';
import EmailVerificationForm from '@/app/(unAuthenticatedApp)/_components/auth/EmailVerificationForm';
import { catchClerkError } from '@/lib/utils';
import { useToast } from '@/components/use-toast';
import { createAccount } from '@/swell/account';
import { useCfTurnstile } from '@/app/(unAuthenticatedApp)/_components/auth/useCFTurnstile';
import { verifyTurnstileToken } from '@/app/(unAuthenticatedApp)/_utils/turnstile.util';

export default function Page() {
  const { toast } = useToast();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const { isVerified: turnstileTokenVeification } = useCfTurnstile();
  const [turnstileToken, setTurnstileToken] = useState('');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded || !turnstileTokenVeification) {
      console.log('turnstileTokenVeification ', turnstileTokenVeification);
      console.log('isLoaded ', isLoaded);
      return;
    }

    try {
      setLoading(true);
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      toast({
        title: 'Kindly review your email for the verification code.',
      });
      setPendingVerification(true);
      setLoading(false);
    } catch (err: any) {
      const error = catchClerkError(err);
      toast({
        title: 'Authentication Error',
        description: error,
        variant: 'destructive',
      });
    }
  };

  const onPressVerify = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded || !turnstileToken) {
      console.log('turnstileToken ', turnstileToken);
      console.log('isLoaded ', isLoaded);
      return;
    }

    try {
      setVerifying(true);

      const turnstileRes = await verifyTurnstileToken(turnstileToken);

      console.log(turnstileRes);

      if (!turnstileRes?.success) {
        return;
      }

      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== 'complete') {
        setVerifying(false);
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === 'complete') {
        const res = await createAccount({
          email: emailAddress,
          password,
          firstName,
          lastName,
        });

        console.log('SWELL register ', res);
        setVerifying(false);
        toast({
          title: `Successfully verified`,
          description: 'You will be redirected to dashboard',
        });
        await setActive({ session: completeSignUp.createdSessionId });
      }
    } catch (err: any) {
      setVerifying(false);
      const error = catchClerkError(err);
      toast({
        title: 'Authentication Error',
        description: error,
        variant: 'destructive',
      });
    }
  };

  return (
    <ComponentWrapper className='flex flex-col justify-center items-center mx-auto px-6 py-8 lg:py-0 md:min-h-[80vh]'>
      {!pendingVerification && (
        <AuthForm
          loading={loading}
          modeType='register'
          setEmailAddress={setEmailAddress}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setTurnstileToken={setTurnstileToken}
        />
      )}

      {pendingVerification && (
        <EmailVerificationForm
          code={code}
          onPressVerify={onPressVerify}
          setCode={setCode}
          error={verificationError}
          loading={verifying}
        />
      )}
    </ComponentWrapper>
  );
}
