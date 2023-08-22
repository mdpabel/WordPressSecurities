import prisma from "@/db/mongo";
import { stripe } from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async () => {
  try {
    const user = await currentUser();

    const customer = await stripe.customers.create({
      email: user?.emailAddresses[0].emailAddress,
    });

    const newUser = await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        stripe_customer: customer?.id,
        email: user?.emailAddresses[0].emailAddress as string,
      },
    });

    return NextResponse.json({
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
};
