import prisma from "@/db/mongo";
import { pusherServer } from "@/lib/pusher";
import { inputSanitize } from "@/lib/sanitizeInput";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const user = await currentUser();
  const { content, chatRoomId, channel } = await req.json();

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

  const sanitizedContent = inputSanitize(content);

  await pusherServer.trigger(channel, "incoming-message", {
    content: sanitizedContent,
    senderId: user?.id,
    senderImg: user?.imageUrl ?? user?.firstName,
    id: new Date().getTime(),
  });

  await prisma.message.create({
    data: {
      chatRoomId: chatRoomId,
      content: sanitizedContent,
      senderId: user?.id,
      senderImg: user?.imageUrl ?? user?.firstName,
    },
  });

  return NextResponse.json({
    message: "Send message successfully",
  });
};
