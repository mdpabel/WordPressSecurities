'use client';
import dynamic from 'next/dynamic';
import { useAsync } from '@/hooks/useAsync';
import { client } from '@/lib/client';
import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Button } from '../../../../../components/Button';
import {
  FileUploadIcon,
  ImageGallery,
  RightArrow,
} from '../../../../../components/icons';
import Spinner from '../../../../../components/Spinner';
// import Emoji from "./Emoji";
import { Textarea } from '../../../../../components/Textarea';
import { inputSanitize, isProfane } from '@/lib/sanitizeInput';
import { useToast } from '../../../../../components/use-toast';
import { cn } from '@/lib/utils';
// import UploadFile from "./UploadFile";
import { Input } from '../../../../../components/Input';

const Emoji = dynamic(() => import('./Emoji'));
const UploadFile = dynamic(() => import('./UploadFile'));

const ChatInput = ({
  chatRoomId,
  channel,
}: {
  channel: string;
  chatRoomId: string;
}) => {
  const { toast } = useToast();
  const { run, isLoading } = useAsync();
  const [message, setMessage] = useState('');
  const [profane, setProfane] = useState(false);

  useEffect(() => {
    if (isProfane(message)) {
      toast({
        variant: 'destructive',
        title:
          'Your message contains inappropriate content. Please remove the offensive words to continue.',
      });
      setProfane(true);
    } else {
      setProfane(false);
    }
  }, [message, toast]);

  const sendMessage = (e: SyntheticEvent) => {
    e.preventDefault();

    if (message.length < 2) {
      return;
    }
    run(
      client('/api/message', {
        method: 'POST',
        data: {
          content: message,
          chatRoomId,
          channel,
        },
      }),
    );

    setMessage('');
  };

  const handleTyping = () => {
    client('/api/userTyping', {
      method: 'POST',
      data: {
        channel,
      },
    });
  };

  return (
    <div className='border-gray-200 mb-2 sm:mb-0 px-4 pt-4 border-t-2'>
      <div className='flex md:flex-row flex-col space-y-4 md:space-y-0'>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyUp={handleTyping}
          required
          minLength={1}
          name='message'
          placeholder='Write your message!'
          className='pl-5 w-full focus:outline-none focus:placeholder-gray-400 bg-gray-200 py-3 rounded-md text-gray-800 placeholder-gray-600'
        />
        <div className='right-0 inset-y-0 flex items-center'>
          <UploadFile channel={channel} chatRoomId={chatRoomId} />

          <Emoji setMessage={setMessage} />

          <Button
            onClick={sendMessage}
            disabled={profane}
            className={cn(
              'inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none',
            )}>
            <span className='font-semibold'>
              {profane ? 'Not Allowed' : 'Send'}
            </span>
            {isLoading ? <Spinner /> : profane ? '' : <RightArrow />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
