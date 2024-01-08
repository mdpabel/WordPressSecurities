'use client';
import ComponentWrapper from '@/components/ui/ComponentWrapper';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import AuthForm from '@/components/auth/authForm';
import EmailVerificationForm from '@/components/auth/EmailVerificationForm';
import { client } from '@/lib/client';
import { catchClerkError } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

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

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded) {
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
    if (!isLoaded) {
      return;
    }

    try {
      setVerifying(true);
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== 'complete') {
        setVerifying(false);
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === 'complete') {
        setVerifying(false);
        toast({
          title: `Successfully verified`,
          description: 'You will be redirected to dashboard',
        });
        await setActive({ session: completeSignUp.createdSessionId });
        await client('/api/profile', {
          method: 'POST',
        });
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
    <ComponentWrapper className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-[80vh] lg:py-0'>
      {!pendingVerification && (
        <AuthForm
          loading={loading}
          modeType='register'
          setEmailAddress={setEmailAddress}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          setFirstName={setFirstName}
          setLastName={setLastName}
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
