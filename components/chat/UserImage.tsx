import React from "react";

const UserImage = ({ senderId }: { senderId: string }) => {
  return (
    <img
      src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
      alt="My profile"
      className="w-6 h-6 rounded-full order-1"
    />
  );
};

export default UserImage;
