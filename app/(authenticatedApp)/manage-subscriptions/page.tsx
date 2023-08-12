import ComponentWrapper from "@/components/ComponentWrapper";
import Title from "../Title";
import Button from "@/components/Button";
import SubTitle from "../SubTitle";
import Subscription from "./Subscription";
import prisma from "@/db/mongo";
import { currentUser } from "@clerk/nextjs";

const getSubscription = async () => {
  const user = await currentUser();

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
  const subscriptions = await getSubscription();

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
