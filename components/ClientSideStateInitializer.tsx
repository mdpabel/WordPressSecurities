"use client";
import { useUser } from "@/stores/user";
import React from "react";

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
