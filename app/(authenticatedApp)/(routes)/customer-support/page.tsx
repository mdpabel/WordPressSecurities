import CustomerProfile from '@/app/(authenticatedApp)/(routes)/customer-support/_components/CustomerProfile';
import Messages from '../../../components/chat/Messages';
import prisma from '@/prisma/prisma';
import { currentUser, RedirectToSignIn } from '@clerk/nextjs';
import ChatInput from '@/app/(authenticatedApp)/(routes)/customer-support/_components/ChatInput';

const getMessages = async (chatRoomId: string) => {
  const initialMessages = await prisma.message.findMany({
    where: {
      chatRoomId: chatRoomId,
    },
  });

  return initialMessages;
};

const CustomerSupports = async () => {
  const user = await currentUser();

  if (!user) {
    return <RedirectToSignIn />;
  }

  const initialMessages = await getMessages(user.id);
  const sender = initialMessages.find((m) => m.senderId != user?.id)?.senderId;

  return (
    <div className='flex-1 p:2 sm:px-6 flex flex-col h-screen'>
      <CustomerProfile sender={sender!} />
      <div>
        <Messages
          userId={user?.id}
          channel={user?.id}
          initialMessages={initialMessages}
        />
        <ChatInput channel={user?.id} chatRoomId={user?.id} />
      </div>
    </div>
  );
};

export default CustomerSupports;
