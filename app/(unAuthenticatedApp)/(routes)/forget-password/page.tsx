'use client';
import React, { SyntheticEvent, useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import type { NextPage } from 'next';
import ComponentWrapper from '@/components/ComponentWrapper';
import Logo from '@/app/(unAuthenticatedApp)/_components/layouts/Logo';
import Alert from '@/components/Alert';
import { Input } from '@/components/Input';
import Spinner from '@/components/Spinner';
import { Button } from '@/components/Button';

export const dynamic = 'force-static';

const SignInPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [complete, setComplete] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { isLoaded, signIn, setActive } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  async function create(e: SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    await signIn
      ?.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      })
      .then((_) => {
        setSuccessfulCreation(true);
        setMessage('Please check your email to get the reset password code.');
        setError('');
        setLoading(false);
      })
      .catch((err) => {
        setError(err.errors[0].longMessage);
        setMessage('');
        setLoading(false);
      });
  }

  async function reset(e: SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    await signIn
      ?.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password,
      })
      .then((result) => {
        if (result.status === 'needs_second_factor') {
          setSecondFactor(true);
          setLoading(false);
        } else if (result.status === 'complete') {
          setActive({ session: result.createdSessionId });
          setComplete(true);
          setMessage('');
          setError('');
          setLoading(false);
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        setMessage('');
        setError(err.errors[0].longMessage);
        setLoading(false);
      });
  }

  return (
    <ComponentWrapper className='flex flex-col justify-center items-center mx-auto px-6 py-8 lg:py-0 md:min-h-[80vh]'>
      <div className='pb-4'>
        <Logo />
      </div>
      <div className='bg-white shadow md:mt-0 xl:p-0 rounded-lg w-full sm:max-w-md'>
        <div className='space-y-4 md:space-y-6 p-6 sm:p-8'>
          {error && <Alert intent='danger'>{error}</Alert>}
          {message && <Alert intent='success'>{message}</Alert>}
          <h1 className='font-semibold text-gray-900 text-xl md:text-2xl leading-tight tracking-tight'>
            Reset your password
          </h1>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1em',
            }}
            onSubmit={!successfulCreation ? create : reset}>
            {!successfulCreation && !complete && (
              <div className='space-y-4'>
                <Input
                  id='forgetPass'
                  label='Enter email'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='myemail@example.com'
                  type='email'
                />

                <div>
                  <Button type='submit'>
                    {loading ? <Spinner /> : 'Reset password'}
                  </Button>
                </div>
              </div>
            )}

            {successfulCreation && !complete && (
              <div className='space-y-4'>
                <Input
                  id='newPass'
                  label='New password'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='*******'
                  type='password'
                />

                <Input
                  id='resetPassCode'
                  label='Reset password code'
                  onChange={(e) => setCode(e.target.value)}
                  placeholder='*******'
                  type='text'
                />

                <div>
                  <Button type='submit'>
                    {loading ? <Spinner /> : 'Set new password'}
                  </Button>
                </div>
              </div>
            )}

            {complete && 'You successfully changed you password'}
            {secondFactor && '2FA is required, this UI does not handle that'}
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default SignInPage;
