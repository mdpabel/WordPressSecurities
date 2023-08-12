import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/utils/stripe";
import prisma from "@/db/mongo";
import { currentUser } from "@clerk/nextjs";

export const GET = async (req: NextRequest, context: any) => {
  try {
    const user = await currentUser();
    const { params } = context;

    const profile = await prisma.user.findFirst({
      where: {
        clerkId: user?.id,
      },
    });

    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: process.env.SITE_URL + "/payment-success",
      cancel_url: process.env.SITE_URL + "/payment-cancelled",
      payment_method_types: ["card"],
      mode: "subscription",
      customer: profile?.stripe_customer as string,
      line_items: [
        {
          price: params.priceId,
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      sessionId: checkoutSession.id,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
};
