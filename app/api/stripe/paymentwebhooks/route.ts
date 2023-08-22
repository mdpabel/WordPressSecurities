import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import prisma from "@/db/mongo";
import { currentUser } from "@clerk/nextjs";
import { stripe } from "@/lib/stripe";

export const POST = async (req: NextRequest) => {
  try {
    const user = await currentUser();
    const sig = headers().get("stripe-signature") as string;
    const signingSecrete = process.env.STRIPE_PAYMENT_WEBHOOKS_SIGNING_SECRETE!;
    const reqString = await req.text();

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
      case "checkout.session.completed":
        const checkoutSessionCompleted: any = event.data.object;
        await prisma.order.create({
          data: {
            amount: checkoutSessionCompleted.amount_total,
            orderId: checkoutSessionCompleted.id,
            userId: profile?.id,
            product_ids: checkoutSessionCompleted.client_reference_id,
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
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: `Webhook Error: ${error.message}`,
      },
      {
        status: 400,
      }
    );
  }
};
