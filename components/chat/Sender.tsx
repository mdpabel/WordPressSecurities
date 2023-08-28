import { clerkClient } from "@clerk/nextjs";
import React from "react";

const Sender = async ({ sender }: { sender: string }) => {
  let fullName = "Admin";

  if (sender) {
    const user = await clerkClient.users.getUser(sender);
    fullName = user.firstName + " " + user?.lastName;
  }

  return <h2 className="text-xl">{fullName}</h2>;
};

export default Sender;
