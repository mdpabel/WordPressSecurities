import prisma from '@/prisma/prisma';
import { stripe } from '@/lib/stripe';
import { auth, currentUser, redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const page = async () => {
  const user = await currentUser();

  const dbUser = await prisma.user.findFirst({
    where: {
      clerkId: user?.id,
    },
  });

  if (dbUser) {
    redirect('/dashboard');
  }

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

  if (newUser) {
    redirect('/dashboard');
  }

  return null;
};

export default page;
