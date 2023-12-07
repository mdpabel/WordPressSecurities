import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/common/Card';
import { Message } from '@prisma/client';
import Link from 'next/link';
import { clerkClient } from '@clerk/nextjs';
import { formatDate, formatDateAndTime } from '@/lib/utils';
import prisma from '@/db/mongo';
import { Button } from '@/components/common/Button';

const getMessage = async (chatRoomId: string) => {
  const message = await prisma.message.findMany({
    where: {
      chatRoomId: chatRoomId,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  return message;
};

const ChatRoom = async ({ chatRoom }: { chatRoom: Message }) => {
  const user = await clerkClient.users.getUser(chatRoom?.senderId);
  console.log(user);
  const messages = (await getMessage(chatRoom.chatRoomId)) ?? [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sender: {user.firstName + ' ' + user?.lastName}</CardTitle>
        <CardDescription>
          {formatDateAndTime(chatRoom.updatedAt)}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p>{messages.length > 0 && messages[0].content}</p>
      </CardContent>
      <CardFooter>
        <Button variant='outline' className='border border-black' asChild>
          <Link href={'/messages/' + chatRoom.chatRoomId}>Reply</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChatRoom;
