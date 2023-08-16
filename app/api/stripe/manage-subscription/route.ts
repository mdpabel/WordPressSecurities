import prisma from "@/db/mongo";
import { stripe } from "@/utils/stripe";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const user = await currentUser();

  const profile = await prisma.user.findFirst({
    where: {
      clerkId: user?.id,
    },
  });

  const session = await stripe.billingPortal.sessions.create({
    customer: profile?.stripe_customer as string,
    return_url: process.env.SITE_URL + "/manage-subscriptions",
  });

  return NextResponse.json({
    url: session.url,
  });
};
