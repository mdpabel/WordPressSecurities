"use client";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Button from "@/components/Button";
import { useUser } from "@/stores/user";
import { client } from "@/utils/client";
import { loadStripe } from "@stripe/stripe-js";
import Spinner from "@/components/Spinner";

const SubscribeButton = ({ planId }: { planId: string }) => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, userId, isSubscribed } = useUser();

  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    if (userId) {
      const fetchProfile = async () => {
        useUser.setState({
          isLoading: true,
        });
        const profile = await supabase
          .from("profile")
          .select("*")
          .eq("id", userId)
          .single();

        useUser.setState({
          isSubscribed: profile?.data?.is_subscribed ?? false,
          stripeCustomer: profile?.data?.stripe_customer ?? "",
          isLoading: false,
        });
      };

      fetchProfile();
    }
  }, [userId]);

  const showSubscriptionButton = isLoggedIn && !isSubscribed;
  const showCreateAccountButton = !isLoggedIn;
  const showManageAccountButton = isLoggedIn && isSubscribed;

  const handleSubscription = async (planId: string) => {
    setLoading(true);
    const data = await client(`/api/subscription/${planId}`);
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
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
          outline={true}
          onClick={() => handleSubscription(planId)}
          className="flex justify-center"
        >
          {loading ? <Spinner className="text-black" /> : "Subscribe"}
        </Button>
      )}

      {showCreateAccountButton && (
        <Button
          className="flex justify-center"
          href="/register"
          type="link"
          outline={true}
        >
          Create account
        </Button>
      )}

      {showManageAccountButton && (
        <Button className="flex justify-center" outline={true}>
          Manage subscription
        </Button>
      )}
    </>
  );
};

export default SubscribeButton;
