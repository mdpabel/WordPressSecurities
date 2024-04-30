import React, { Suspense } from 'react';
import { SearchIcon } from '../../../../../components/icons';
import { Button } from '../../../../../components/Button';
import Sender from './Sender';

const CustomerProfile = ({ sender }: { sender: string }) => {
  return (
    <div className='flex sm:items-center justify-between py-3 border-b-2 border-gray-200'>
      <Suspense fallback='Loading...'>
        <Sender sender={sender} />
      </Suspense>
      <Button
        type='button'
        className='bg-transparent p-0 inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default CustomerProfile;
