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
  const sender = initialMessages.find((m) => m.senderId != user?.id)?.senderId;

  return (
    <div className="flex-1 p:2 sm:px-6 flex flex-col h-screen">
      <CustomerProfile sender={sender!} />
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
