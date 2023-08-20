"use client";
import React, { useEffect, useState } from "react";
import { pusherClient } from "@/utils/pusher";
import { useSession } from "@clerk/nextjs";
import Message from "./Message";
import { Message as MessageType } from "@prisma/client";

const Messages = ({
  initialMessages,
  channel,
  userId,
}: {
  initialMessages: MessageType[];
  channel: string;
  userId: string;
}) => {
  const [incomingMessages, setIncomingMessages] = useState<string[]>([]);

  useEffect(() => {
    pusherClient.subscribe(channel);

    pusherClient.bind("incoming-message", (message: string) => {
      console.log(message);
      setIncomingMessages((prev) => [...prev, message]);
    });
  }, []);

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
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default Messages;
