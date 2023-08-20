"use client";
import { SyntheticEvent, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import LoginSignupForm from "@/components/LoginSignupForm";

export default function Page() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // start the sign up process.
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
        router.push("/dashboard");
        setLoading(false);
        router.push("/dashboard");
      } else {
        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);
      setError(err.errors[0].longMessage);
    }
  };

  return (
    <LoginSignupForm
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      modeType="login"
      setEmailAddress={setEmailAddress}
      setPassword={setPassword}
    />
  );
}
