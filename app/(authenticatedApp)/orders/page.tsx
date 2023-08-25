import prisma from "@/db/mongo";
import Order from "./Order";

import { currentUser, RedirectToSignIn } from "@clerk/nextjs";
import { Title } from "@/components/common/Title";

const getOrders = async () => {
  const user = await currentUser();

  if (!user) {
    <RedirectToSignIn />;
  }

  const orders = await prisma.order.findMany({
    where: {
      user: {
        clerkId: user?.id,
      },
    },
  });

  return orders;
};

const Orders = async () => {
  const orders = await getOrders();

  return (
    <div className="space-y-4">
      <Title>All Orders</Title>
      <div className="space-y-6">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
