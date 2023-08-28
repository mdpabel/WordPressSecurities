import { Title } from "@/components/common/Title";
import prisma from "@/db/mongo";
import React from "react";
import ChatRoom from "@/components/chat/ChatRoom";

const getChatRooms = async () => {
  const chatRooms = await prisma.message.findMany({
    distinct: ["chatRoomId"],
    orderBy: {
      updatedAt: "desc",
    },
  });

  return chatRooms;
};

const page = async () => {
  const chatRooms = await getChatRooms();

  return (
    <div>
      <Title>Customers Messages</Title>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {chatRooms.map((chatRoom) => (
          <ChatRoom key={chatRoom.id} chatRoom={chatRoom} />
        ))}
      </div>
    </div>
  );
};

export default page;
