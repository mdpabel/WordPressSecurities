import React from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { FileUploadIcon } from '../ui/icons';
import { client } from '@/lib/client';

const UploadFile = ({
  chatRoomId,
  channel,
}: {
  channel: string;
  chatRoomId: string;
}) => {
  const handleUpload = (result: any) => {
    const imageUrl = result?.info?.secure_url;
    client('/api/message', {
      method: 'POST',
      data: {
        content: `img:${imageUrl}`,
        chatRoomId,
        channel,
      },
    });
  };

  return (
    <CldUploadButton
      onUpload={handleUpload}
      uploadPreset='c5ls524f'
      className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none bg-transparent p-0'>
      <FileUploadIcon />
    </CldUploadButton>
  );
};

export default UploadFile;
