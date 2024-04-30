import prisma from '@/prisma/prisma';
import { stripe } from '@/lib/stripe';
import { auth, currentUser, RedirectToSignIn } from '@clerk/nextjs';
import { subscribe } from 'diagnostics_channel';
import React from 'react';

export const dynamic = 'force-static';

interface Props {
  searchParams: {
    session_id: string;
  };
}

const page = async ({ searchParams }: Props) => {
  // const { userId } = auth();
  // const session = await stripe.checkout.sessions.retrieve(
  //   searchParams?.session_id
  // );

  // if (!userId) {
  //   return <RedirectToSignIn />
  // }

  // const profile = await prisma.user.findFirst({
  //   where: {
  //     stripe_customer: userId as string,
  //   },
  // });

  // await prisma.subscription.create({
  //   data: {
  //     subscription_id : session?.subscription,
  //     cancellation_date : session?.
  //     after_expiration : ,
  //     customer_addition_contact: ,
  //     plan_name : ,
  //     subscription_end : ,
  //     subscription_notes: ,
  //     subscription_start : ,
  //     website_url : ,

  //     user_id: {
  //       connect: {
  //         id: profile?.id,
  //       },
  //     },
  //   },
  // });

  // console.log(session);

  return <div>payment-status</div>;
};

export default page;
