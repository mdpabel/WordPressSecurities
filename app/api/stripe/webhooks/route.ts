import { stripe } from "@/utils/stripe";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { getServiceSupabase } from "@/utils/supabase";

export const POST = async (req: NextRequest) => {
  const sig = headers().get("stripe-signature") as string;
  const reqString = await req.text();
  const signingSecrete = process.env.STRIPE_WEBHOOKS_SIGNING_SECRETE;

  let event;

  try {
    event = stripe.webhooks.constructEvent(reqString, sig, signingSecrete);
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(`Webhook Error: ${err.message}`, {
      status: 400,
    });
  }

  const supabase = getServiceSupabase();

  // Handle the event
  switch (event.type) {
    case "customer.subscription.created":
      const customerSubscriptionCreated = event.data.object;
      const res = await supabase
        .from("profile")
        .update({
          is_subscribed: true,
          interval:
            "" +
            customerSubscriptionCreated.plan.interval_count +
            " " +
            "" +
            customerSubscriptionCreated.plan.interval,
        })
        .eq("stripe_customer", customerSubscriptionCreated.customer);

      console.log(customerSubscriptionCreated);
      break;
    case "customer.subscription.deleted":
      const customerSubscriptionDeleted = event.data.object;
      // Then define and call a function to handle the event customer.subscription.deleted
      break;
    case "customer.subscription.updated":
      const customerSubscriptionUpdated = event.data.object;
      // Then define and call a function to handle the event customer.subscription.updated
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({
    status: "OK",
    message: "Webhook POST request received",
    received: true,
  });
};
