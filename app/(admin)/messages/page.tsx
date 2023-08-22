import prisma from "@/db/mongo";
import React from "react";

const getChatRoomIds = async () => {
  const chatRoomIds = await prisma.message.findMany({
    distinct: ["chatRoomId"],
    select: {
      chatRoomId: true,
    },
  });

  return chatRoomIds;
};

const page = async () => {
  const chatRoomIds = await getChatRoomIds();

  return (
    <div>
      {chatRoomIds.map((chatRoomId) => (
        <div></div>
      ))}
    </div>
  );
};

export default page;
