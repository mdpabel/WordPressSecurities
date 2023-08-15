"use client";
import ComponentWrapper from "@/components/ComponentWrapper";
import { SyntheticEvent, useEffect, useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import LoginSignupForm from "@/components/LoginSignupForm";
import EmailVerificationForm from "@/components/EmailVerificationForm";
import { client } from "@/utils/client";

export default function Page() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      setLoading(true);
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
      setLoading(false);
    } catch (err: any) {
      console.error("test =>", JSON.stringify(err, null, 2));
      setError(err?.errors[0]?.message ?? "Something went wrong!");

      setLoading(false);
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      setVerifying(true);
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        setVerifying(false);
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        setVerifying(false);

        await setActive({ session: completeSignUp.createdSessionId });
        await client("/api/profile", {
          method: "POST",
        });
        router.push("/dashboard");
      }
    } catch (err: any) {
      setVerifying(false);
      console.log(err);
      setVerificationError(err?.errors[0]?.longMessage);
    }
  };

  return (
    <ComponentWrapper className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-[80vh] lg:py-0">
      {!pendingVerification && (
        <LoginSignupForm
          loading={loading}
          modeType="register"
          setEmailAddress={setEmailAddress}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          error={error}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
      )}

      {pendingVerification && (
        <EmailVerificationForm
          code={code}
          onPressVerify={onPressVerify}
          setCode={setCode}
          error={verificationError}
          loading={verifying}
        />
      )}
    </ComponentWrapper>
  );
}
