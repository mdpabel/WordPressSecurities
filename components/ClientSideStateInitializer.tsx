"use client";
import { useUser } from "@/stores/user";

const ClientSideStateInitializer = ({
  email,
  userId,
  isLoggedIn,
}: {
  email: string;
  userId: string;
  isLoggedIn: boolean;
}) => {
  useUser.setState({
    email,
    userId,
    isLoggedIn,
  });
  return null;
};

export default ClientSideStateInitializer;
