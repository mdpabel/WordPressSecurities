import { stripe } from "@/utils/stripe";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import prisma from "@/db/mongo";
import { currentUser, clerkClient } from "@clerk/nextjs";

export const POST = async (req: NextRequest) => {
  const user = await currentUser();
  const sig = headers().get("stripe-signature") as string;
  const reqString = await req.text();
  const signingSecrete = process.env.STRIPE_WEBHOOKS_SIGNING_SECRETE!;

  const profile = await prisma.user.findFirst({
    where: {
      clerkId: user?.id,
    },
  });

  if (!profile) {
    return NextResponse.json(
      {
        message: "You are not authorized to access this endpoint",
      },
      {
        status: 401,
      }
    );
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(reqString, sig, signingSecrete);
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(`Webhook Error: ${err.message}`, {
      status: 400,
    });
  }

  // Handle the event
  switch (event.type) {
    case "customer.subscription.created":
      const customerSubscriptionCreated: any = event.data.object;

      await prisma.subscription.create({
        data: {
          price_id: customerSubscriptionCreated.plan.id,
          cancellation_date: null,
          subscription_id: customerSubscriptionCreated.id,
          subscription_status: customerSubscriptionCreated.plan.active
            ? "active"
            : "cancelled",
          interval_count: customerSubscriptionCreated.plan.interval_count,
          interval: customerSubscriptionCreated.plan.interval,
          amount: customerSubscriptionCreated.plan.amount / 100,
          current_period_end: new Date(
            customerSubscriptionCreated.current_period_end * 1000
          ),
          current_period_start: new Date(
            customerSubscriptionCreated.current_period_start * 1000
          ),
          userId: profile.id,
        },
      });

      clerkClient.users.updateUser(user?.id!, {
        privateMetadata: {
          isSubscribed: true,
          role: "user",
          current_period_end: new Date(
            customerSubscriptionCreated.current_period_end * 1000
          ),
        },
        publicMetadata: {
          isSubscribed: true,
          role: "user",
        },
      });

      break;
    case "customer.subscription.deleted":
      const customerSubscriptionDeleted: any = event.data.object;
      const sub = await prisma.subscription.findFirst({
        where: {
          subscription_id: customerSubscriptionDeleted.id as string,
        },
      });

      await prisma.subscription.update({
        where: {
          id: sub?.id,
        },
        data: {
          cancellation_date: new Date(
            customerSubscriptionDeleted.canceled_at * 1000
          ),
        },
      });

      clerkClient.users.updateUser(user?.id!, {
        privateMetadata: {
          role: "user",
          isSubscribed: true,
          cancellation_date: new Date(
            customerSubscriptionDeleted.canceled_at * 1000
          ),
        },
        publicMetadata: {
          isSubscribed: true,
          role: "user",
        },
      });

      break;
    case "customer.subscription.updated":
      const customerSubscriptionUpdated: any = event.data.object;

      const subscription = await prisma.subscription.findFirst({
        where: {
          subscription_id: customerSubscriptionUpdated.id as string,
        },
      });

      await prisma.subscription.update({
        where: {
          id: subscription?.id,
        },
        data: {
          cancellation_date: null,
          interval_count: customerSubscriptionUpdated.plan.interval_count,
          interval: customerSubscriptionUpdated.plan.interval,
          amount: customerSubscriptionUpdated.plan.amount,
          current_period_end: new Date(
            customerSubscriptionUpdated.current_period_end * 1000
          ),
          current_period_start: new Date(
            customerSubscriptionUpdated.current_period_start * 1000
          ),
        },
      });
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({
    status: "OK",
    message: "Webhook POST request received",
    received: true,
  });
};
