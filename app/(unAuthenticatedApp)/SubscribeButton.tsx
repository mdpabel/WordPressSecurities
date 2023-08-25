"use client";
import { useState } from "react";
import { useUser } from "@/stores/user";
import { client } from "@/lib/client";
import { loadStripe } from "@stripe/stripe-js";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/common/Button";
import Link from "next/link";

const SubscribeButton = ({ planId }: { planId: string }) => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, userId } = useUser();

  const showSubscriptionButton = isLoggedIn;
  const showCreateAccountButton = !isLoggedIn;

  const handleSubscription = async (planId: string) => {
    setLoading(true);
    const data = await client(`/api/subscription/${planId}`);
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );

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
