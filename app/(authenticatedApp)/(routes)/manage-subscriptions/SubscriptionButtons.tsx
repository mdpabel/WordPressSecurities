'use client';
import Spinner from '@/components/Spinner';
import { client } from '@/lib/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SubscriptionButtons = ({
  subscription_id,
}: {
  subscription_id: string;
}) => {
  const [updateLoading, setUpdateLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = () => {
    setUpdateLoading(true);
    client('/api/stripe/manage-subscription').then((res) => {
      const url = res.url + '/subscriptions/' + subscription_id + '/update';
      setUpdateLoading(false);
      router.push(url);
    });
  };

  const handleCancel = () => {
    setCancelLoading(true);
    client('/api/stripe/manage-subscription').then((res) => {
      const url = res.url + '/subscriptions/' + subscription_id + '/cancel';
      setCancelLoading(false);
      router.push(url);
    });
  };

  return (
    <div className='space-x-4'>
      <button
        onClick={handleUpdate}
        className='bg-gray-600 text-gray-50 px-6 py-2 rounded'>
        {updateLoading ? <Spinner /> : 'Update'}
      </button>

      <button
        onClick={handleCancel}
        className='bg-gray-600 text-gray-50 px-6 py-2 rounded'>
        {cancelLoading ? <Spinner /> : 'Cancel'}
      </button>
    </div>
  );
};

export default SubscriptionButtons;
