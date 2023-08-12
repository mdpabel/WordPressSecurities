"use client";
import { useUser } from "@/stores/user";

const ClientSideStateInitializer = ({
  email,
  userId,
  isLoggedIn,
  stripeCustomer,
}: {
  email: string;
  userId: string;
  isLoggedIn: boolean;
  stripeCustomer: string;
}) => {
  useUser.setState({
    email,
    userId,
    isLoggedIn,
    stripeCustomer,
  });

  return null;
};

export default ClientSideStateInitializer;
