import ComponentWrapper from "@/components/ComponentWrapper";
import Title from "../Title";
import Button from "@/components/Button";
import SubTitle from "../SubTitle";
import Subscription from "./Subscription";
import prisma from "@/db/mongo";
import { currentUser, RedirectToSignIn } from "@clerk/nextjs";
import { Subscription as SubscriptionType } from "@prisma/client";

const getSubscription = async () => {
  const user = await currentUser();

  if (!user) {
    return <RedirectToSignIn />;
  }

  const subscriptions = await prisma.subscription.findMany({
    where: {
      user: {
        clerkId: user?.id,
      },
    },
  });

  return subscriptions;
};

const ManageSubscription = async () => {
  const subscriptions = (await getSubscription()) as SubscriptionType[];

  return (
    <div className="space-y-4">
      <Title>Manage Subscription</Title>
      <div className="space-y-6">
        {subscriptions.map((subscription) => (
          <Subscription subscription={subscription} key={subscription.id} />
        ))}
      </div>
    </div>
  );
};

export default ManageSubscription;
