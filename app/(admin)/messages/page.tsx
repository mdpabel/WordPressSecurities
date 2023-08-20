import prisma from "@/db/mongo";
import React from "react";

const getChatRooms = async () => {
  const chatRooms = await prisma.message;
};

const page = async () => {
  return <div>page</div>;
};

export default page;
