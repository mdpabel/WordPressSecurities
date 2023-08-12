import ClientSideStateInitializer from "@/components/ClientSideStateInitializer";
import prisma from "@/db/mongo";
import { stripe } from "@/utils/stripe";
import { auth, currentUser, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();

  if (!user) {
    redirectToSignIn();
  }

  const dbUser = await prisma.user.findFirst({
    where: {
      clerkId: user?.id,
    },
  });

  if (dbUser) {
    redirect("/dashboard");
  }

  const customer = await stripe.customers.create({
    email: user?.emailAddresses[0].emailAddress,
  });

  const newUser = await prisma.user.create({
    data: {
      clerkId: user?.id as string,
      stripe_customer: customer?.id,
    },
  });

  if (newUser) {
    redirect("/dashboard");
  }

  return null;
};

export default page;
