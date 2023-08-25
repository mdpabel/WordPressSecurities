import CustomerProfile from "@/components/chat/CustomerProfile";
import prisma from "@/db/mongo";
import { currentUser, RedirectToSignIn } from "@clerk/nextjs";
import ChatInput from "@/components/chat/ChatInput";
import Messages from "@/components/chat/Messages";

const getMessages = async (chatRoomId: string) => {
  const initialMessages = await prisma.message.findMany({
    where: {
      chatRoomId: chatRoomId,
    },
  });

  return initialMessages;
};

type CustomerSupportsProps = {
  params: {
    chatRoom: string;
  };
};

const ChatRoom = async ({ params }: CustomerSupportsProps) => {
  const user = await currentUser();

  if (!user) {
    return <RedirectToSignIn />;
  }

  const initialMessages = await getMessages(params.chatRoom);

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <CustomerProfile />
      <div>
        <Messages
          userId={user?.id}
          channel={params.chatRoom}
          initialMessages={initialMessages}
        />
        <ChatInput channel={params.chatRoom} chatRoomId={params.chatRoom} />
      </div>
    </div>
  );
};

export default ChatRoom;
