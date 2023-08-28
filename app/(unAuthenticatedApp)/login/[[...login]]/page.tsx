"use client";
import { SyntheticEvent, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import AuthForm from "@/components/auth/authForm";
import { useToast } from "@/components/common/use-toast";
import { catchClerkError } from "@/lib/utils";

export default function Page() {
  const { toast } = useToast();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      setLoading(true);
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        setLoading(false);
        toast({
          title: `Welcome back ${
            result.userData.firstName + " " + result.userData.lastName
          }`,
          description: "You will be redirected to dashboard",
        });
      } else {
        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);
      const error = catchClerkError(err);
      toast({
        title: "Authentication Error",
        description: error,
        variant: "destructive",
      });
    }
  };

  return (
    <AuthForm
      loading={loading}
      handleSubmit={handleSubmit}
      modeType="login"
      setEmailAddress={setEmailAddress}
      setPassword={setPassword}
    />
  );
}
