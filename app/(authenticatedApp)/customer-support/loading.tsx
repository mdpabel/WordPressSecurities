import ChatInput from "@/components/chat/ChatInput";
import CustomerProfile from "@/components/chat/CustomerProfile";
import React from "react";

const SkeletonChatInterface = () => {
  return (
    <div className="flex-1 p-2 sm:px-6 flex flex-col h-screen">
      {/* Skeleton for CustomerProfile */}
      <CustomerProfile sender="" />

      <div>
        {/* Skeleton for Messages */}
        <div className="bg-gray-300 h-64 mb-4 rounded"></div>

        {/* Skeleton for ChatInput */}
        <ChatInput channel="" chatRoomId="" />
      </div>
    </div>
  );
};

export default SkeletonChatInterface;
