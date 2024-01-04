import ComponentWrapper from '@/components/ui/ComponentWrapper';
import Logo from '@/components/layouts/Logo';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import Spinner from '@/components/ui/Spinner';
import { Input } from '@/components/ui/Input';
import { Button } from '../ui/Button';

type IForm = {
  handleSubmit: (e: SyntheticEvent) => Promise<void>;
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

const AuthForm = (props: IForm) => {
  const content =
    props.modeType === 'register' ? registerContent : signInContent;

  const { modeType, handleSubmit, setEmailAddress, loading, setPassword } =
    props;

  return (
    <ComponentWrapper className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-[80vh] lg:py-0'>
      <div className='pb-4'>
        <Logo />
      </div>
      <div className='w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 '>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
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
                      placeholder='First name'
                      type='text'
                      label='First Name'
                      onChange={(e) => props.setFirstName(e.target.value)}
                    />
                    <Input
                      required
                      min={2}
                      id='lastName'
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
              placeholder='hello@wordpresssecurities.com'
              type='email'
              label='Email'
              onChange={(e) => setEmailAddress(e.target.value)}
            />

            <Input
              min={6}
              required
              id='password'
              placeholder='*********'
              type='password'
              label='Password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='flex items-center justify-between'>
              <Button type='submit'>
                {loading ? <Spinner /> : content.buttonText}
              </Button>
              <Link
                href='/forgot-password'
                className='text-sm font-medium text-primary-600 hover:underline '>
                Forgot password?
              </Link>
            </div>

            <p className='text-sm font-light text-gray-500 '>
              {content.label} {'  '}
              <Link
                href={content.linkUrl}
                className='font-medium text-primary-600 hover:underline '>
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
