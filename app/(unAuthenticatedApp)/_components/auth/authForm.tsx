'use client';
import ComponentWrapper from '@/components/ComponentWrapper';
import Logo from '@/app/(unAuthenticatedApp)/_components/layouts/Logo';
import Link from 'next/link';
import React, { Dispatch, FormEvent, SetStateAction } from 'react';
import Spinner from '@/components/Spinner';
import { Input } from '@/components/Input';
import { Button } from '../../../../components/Button';
import CFTurnstile from './CFTurnstile';

type FormType = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setEmailAddress: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  loading: boolean;
} & (
  | {
      modeType: 'register';
      setFirstName: Dispatch<SetStateAction<string>>;
      setLastName: Dispatch<SetStateAction<string>>;
    }
  | {
      modeType: 'login';
    }
);

const registerContent = {
  linkUrl: '/login',
  label: 'Already have an account?',
  linkText: 'Login',
  header: 'Create a new account',
  buttonText: 'Register',
  successMessage:
    'Account Creation Successful! 🌟 Please check your email for verification.',
};

const signInContent = {
  linkUrl: '/register',
  label: "Don't have an account?",
  linkText: 'register',
  header: 'Sign in to your account',
  buttonText: 'Sign In',
  successMessage: `
You're in! 🎉 Sign in successful!`,
};

const env = process.env.NODE_ENV;

const AuthForm = (props: FormType) => {
  const content =
    props.modeType === 'register' ? registerContent : signInContent;

  const { modeType, handleSubmit, setEmailAddress, loading, setPassword } =
    props;

  return (
    <ComponentWrapper className='flex flex-col justify-center items-center mx-auto px-6 py-8 lg:py-0 md:min-h-[80vh]'>
      <div className='pb-4'>
        <Logo />
      </div>
      <div className='bg-white shadow md:mt-0 xl:p-0 rounded-lg w-full sm:max-w-md'>
        <div className='space-y-4 md:space-y-6 p-6 sm:p-8'>
          <h1 className='font-semibold text-gray-900 text-xl md:text-2xl leading-tight tracking-tight'>
            {content.header}
          </h1>
          <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
            {modeType === 'register' &&
              props.setFirstName &&
              props.setLastName && (
                <>
                  <div className='flex space-x-4'>
                    <Input
                      required
                      min={2}
                      id='firstName'
                      name='firstName'
                      placeholder='First name'
                      type='text'
                      label='First Name'
                      onChange={(e) => props.setFirstName(e.target.value)}
                    />
                    <Input
                      required
                      min={2}
                      id='lastName'
                      name='lastName'
                      placeholder='Last Name'
                      type='text'
                      label='Last Name'
                      onChange={(e) => props.setLastName(e.target.value)}
                    />
                  </div>
                </>
              )}
            <Input
              required
              min={6}
              id='email'
              name='email'
              placeholder='hello@wordpresssecurities.com'
              type='email'
              label='Email'
              onChange={(e) => setEmailAddress(e.target.value)}
            />

            <Input
              min={6}
              required
              id='password'
              name='password'
              placeholder='*********'
              type='password'
              label='Password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <CFTurnstile />

            <div className='flex justify-between items-center'>
              <Button type='submit'>
                {loading ? <Spinner /> : content.buttonText}{' '}
              </Button>

              <Link
                href='/forget-password'
                className='font-medium text-primary-600 text-sm hover:underline'>
                Forgot password?
              </Link>
            </div>

            <p className='font-light text-gray-500 text-sm'>
              {content.label} {'  '}
              <Link
                href={content.linkUrl}
                className='font-medium text-primary-600 hover:underline'>
                {content.linkText}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default AuthForm;
