import prisma from "@/db/mongo";
import { stripe } from "@/utils/stripe";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const services = [
  {
    id: 1,
    label: "Malware/hacked removal",
    price: 30,
  },
  {
    id: 2,
    label: "Software update",
    price: 0,
  },
  {
    id: 3,
    label: "Google safe browsing blacklist removal",
    price: 25,
  },
  {
    id: 4,
    label: "McAfee blacklist removal",
    price: 15,
  },
  {
    id: 5,
    label: "Norton safe blacklist removal",
    price: 15,
  },
  {
    id: 6,
    label: "SSL installation",
    price: 30,
  },
  {
    id: 7,
    label: "Security patch installation",
    price: 40,
  },
  {
    id: 8,
    label: "Ddos protection",
    price: 70,
  },
  {
    id: 9,
    label: "http 500 internal server error",
    price: 15,
  },
  {
    id: 10,
    label: "Penetration testing",
    price: 99,
  },
];

const calculatePrice = (items: number[]) => {
  const selectedServices = services.filter(
    (service) => items.indexOf(service.id) > -1
  );

  let totalPrice = selectedServices.reduce(
    (total, service) => service.price + total,
    0
  );

  return totalPrice;
};

export const GET = async (req: NextRequest) => {
  try {
    const user = await currentUser();
    const url = new URL(req.url);
    const searchParams = url.searchParams.get("items") ?? "";
    const items = searchParams?.split(",").map(Number) ?? [];

    const price = calculatePrice(items);

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

    const session = await stripe.checkout.sessions.create({
      success_url: process.env.SITE_URL + "/payment-success",
      cancel_url: process.env.SITE_URL + "/payment-cancelled",
      payment_method_types: ["card"],
      mode: "payment",
      allow_promotion_codes: true,
      customer: profile?.stripe_customer as string,
      client_reference_id: searchParams,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: price * 100,
            product_data: {
              name: "Emergency Rescue Services",
              images: ["https://word-press-securities.vercel.app/security.jpg"],
              description:
                "Get Your Website Back on Track in No Time - Swift and Effective Solutions for Critical Situations",
              metadata: {
                hello: "Hello",
              },
            },
          },
        },
      ],
    });

    return NextResponse.json({
      sessionId: session.id,
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
