'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Button } from '../../../../../components/Button';
import { EmojiIcon } from '../../../../../components/icons';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

const Emoji = ({
  setMessage,
}: {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type='button'
          id='radix-:R1qjddd9mcq:'
          className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none bg-transparent p-0'>
          <EmojiIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Picker
            data={data}
            onEmojiSelect={(emoji: any) =>
              setMessage((prev) => prev + emoji?.native)
            }
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Emoji;
