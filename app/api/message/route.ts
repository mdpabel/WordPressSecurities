import prisma from "@/db/mongo";
import { pusherServer } from "@/utils/pusher";
import { currentUser } from "@clerk/nextjs/app-beta";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const user = await currentUser();
  const { content } = await req.json();

  if (!user) {
    return NextResponse.json(
      {
        message: "You are not authenticated",
      },
      {
        status: 401,
      }
    );
  }

  pusherServer.trigger(user?.id, "incoming-message", content);

  await prisma.message.create({
    data: {
      chatRoomId: user?.id,
      content: content,
      senderId: user?.id,
    },
  });

  return NextResponse.json({
    message: "Send message successfully",
  });
};
