import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import { pusherServer } from "@/lib/pusher";

export const POST = async (req: NextRequest) => {
  const user = await currentUser();
  const { channel } = await req.json();

  pusherServer.trigger(channel, "typing", { userId: user?.id });
  //   pusherServer.trigger(channel, "stopped-typing", { userId: user?.id });

  return NextResponse.json({});
};
