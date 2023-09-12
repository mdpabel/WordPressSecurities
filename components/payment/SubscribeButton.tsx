"use client";
import { useState } from "react";
import { client } from "@/lib/client";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/common/Button";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const SubscribeButton = ({ planId }: { planId: string }) => {
  const { isSignedIn } = useUser();
  const [loading, setLoading] = useState(false);

  const showSubscriptionButton = isSignedIn;
  const showCreateAccountButton = !isSignedIn;

  const handleSubscription = async (planId: string) => {
    setLoading(true);
    const data = await client(`/api/subscription/${planId}`);
    const stripeInit = import("@stripe/stripe-js");
    const stripe = await (
      await stripeInit
    ).loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

    stripe?.redirectToCheckout({
      sessionId: data.sessionId,
    });

    setLoading(false);
  };

  return (
    <>
      {showSubscriptionButton && (
        <Button
          variant="outline"
          onClick={() => handleSubscription(planId)}
          className="flex justify-center border border-black"
        >
          {loading ? <Spinner className="text-black" /> : "Subscribe"}
        </Button>
      )}

      {showCreateAccountButton && (
        <Button asChild className="flex justify-center" variant="outline">
          <Link href="/register"> Get started</Link>
        </Button>
      )}
    </>
  );
};

export default SubscribeButton;
