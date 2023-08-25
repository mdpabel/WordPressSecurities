"use client";
import React, { useEffect, useRef, useState } from "react";
import { pusherClient } from "@/lib/pusher";
import { clerkClient, useSession } from "@clerk/nextjs";
import Message from "./Message";
import { Message as MessageType } from "@prisma/client";

type InComingMessageType = {
  content: string;
  senderId: string;
};

const Messages = ({
  initialMessages,
  channel,
  userId,
}: {
  initialMessages: MessageType[];
  channel: string;
  userId: string;
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [incomingMessages, setIncomingMessages] = useState<
    InComingMessageType[]
  >([]);

  useEffect(() => {
    let timerId;
    pusherClient.subscribe(channel);

    pusherClient.bind("typing", (data: any) => {
      if (userId !== data.userId) {
        setIsTyping(true);
      }
    });

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      setIsTyping(false);
    }, 1000);

    pusherClient.bind("incoming-message", (message: InComingMessageType) => {
      setIncomingMessages((prev) => [...prev, message]);
    });
  }, [pusherClient, isTyping, incomingMessages]);

  return (
    <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto">
      {initialMessages?.map((message) => (
        <Message
          key={message.id}
          message={message.content}
          right={userId == message?.senderId}
        />
      ))}

      {incomingMessages?.map((message, index) => (
        <Message
          right={userId == message?.senderId}
          key={index}
          message={message.content}
        />
      ))}
      {isTyping ? "typing..." : null}
    </div>
  );
};

export default Messages;
