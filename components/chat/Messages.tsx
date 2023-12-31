"use client";
import React, { useEffect, useRef, useState } from "react";
import { pusherClient } from "@/lib/pusher";
import Message from "./Message";
import { Message as MessageType } from "@prisma/client";

type InComingMessageType = {
  content: string;
  senderId: string;
  senderImg: string;
  id: string;
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
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [incomingMessages, setIncomingMessages] = useState<
    InComingMessageType[]
  >([]);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    pusherClient.subscribe(channel);

    const handleTyping = (data: any) => {
      if (userId !== data.userId) {
        setIsTyping(true);
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    };

    const handleIncomingMessage = (message: InComingMessageType) => {
      console.log(message);
      setIncomingMessages((prev) => [...prev, message]);
    };

    pusherClient.bind("typing", handleTyping);
    pusherClient.bind("incoming-message", handleIncomingMessage);

    return () => {
      clearTimeout(timerId);
      pusherClient.unbind("typing", handleTyping);
      pusherClient.unbind("incoming-message", handleIncomingMessage);
    };
  }, [channel, userId, setIncomingMessages]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [incomingMessages]);

  return (
    <div
      ref={messageContainerRef}
      id="messages"
      className="flex flex-col space-y-4 p-3 h-72 overflow-y-auto"
    >
      {initialMessages?.map((message) => (
        <Message
          senderImg={message.senderImg}
          key={message.id}
          message={message.content}
          right={userId == message?.senderId}
        />
      ))}

      {incomingMessages?.map((message, index) => (
        <Message
          right={userId == message?.senderId}
          key={message.id}
          message={message.content}
          senderImg={message.senderImg}
        />
      ))}
      {isTyping ? "typing..." : null}
    </div>
  );
};

export default Messages;
