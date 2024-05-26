import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import ComponentWrapper from '@/components/ComponentWrapper';
import Logo from '@/app/(unAuthenticatedApp)/_components/layouts/Logo';
import Spinner from '@/components/Spinner';
import Alert from '@/components/Alert';
import { Input } from '@/components/Input';
import { Button } from '../../../../components/Button';

interface IEmailVerificationForm {
  onPressVerify: (e: SyntheticEvent) => Promise<void>;
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  loading: boolean;
  error: string;
}

const EmailVerificationForm = ({
  onPressVerify,
  code,
  setCode,
  loading,
  error,
}: IEmailVerificationForm) => {
  return (
    <ComponentWrapper className='flex flex-col justify-center items-center mx-auto px-6 py-8 lg:py-0 md:min-h-[80vh]'>
      <div className='pb-4'>
        <Logo />
      </div>
      <div className='bg-white shadow md:mt-0 xl:p-0 rounded-lg w-full sm:max-w-md'>
        <div className='space-y-4 md:space-y-6 p-6 sm:p-8'>
          {error && <Alert intent='danger'>{error}</Alert>}
          <h1 className='font-semibold text-gray-900 text-xl md:text-2xl leading-tight tracking-tight'>
            Verify your email
          </h1>
          <form className='space-y-4' onSubmit={onPressVerify}>
            <Input
              id='code'
              type='text'
              label='Verification Code'
              placeholder='Code...'
              onChange={(e) => setCode(e.target.value)}
            />
            <Button type='submit'>{loading ? <Spinner /> : 'Login'}</Button>
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default EmailVerificationForm;
