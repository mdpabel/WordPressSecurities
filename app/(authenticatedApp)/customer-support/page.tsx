import CustomerProfile from "./CustomerProfile";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import prisma from "@/db/mongo";
import { currentUser, RedirectToSignIn } from "@clerk/nextjs";

const getMessages = async (userId: string) => {
  const initialMessages = await prisma.message.findMany({
    where: {
      chatRoomId: userId,
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

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <CustomerProfile />
      <Messages
        userId={user?.id ?? ""}
        channel={user?.id ?? ""}
        initialMessages={initialMessages}
      />
      <ChatInput />
    </div>
  );
};

export default CustomerSupports;
