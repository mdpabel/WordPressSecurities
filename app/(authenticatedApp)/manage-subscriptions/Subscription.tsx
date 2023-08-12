import React from "react";
import SubTitle from "../SubTitle";
import { Subscription } from "@prisma/client";
import { formateDate } from "@/utils/formateDate";
import SubscriptionButtons from "./SubscriptionButtons";

const Subscription = ({ subscription }: { subscription: Subscription }) => {
  const interval = subscription.interval_count + " " + subscription.interval;
  const packageName =
    interval === "1 year"
      ? "Annual"
      : interval === "3 month"
      ? "Quarterly"
      : "Half annual";

  const price =
    packageName === "Annual" ? 99 : packageName === "Quarterly" ? 39 : 59;

  const formateExpiredDate = formateDate(subscription.current_period_end);

  return (
    <div
      style={{
        background: "#f6f6f6",
      }}
      className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center justify-between p-4 md:p-8 rounded shadow"
    >
      <div className="space-y-2">
        <SubTitle>{packageName}</SubTitle>
        <h3>
          Expires on {formateExpiredDate} | {price} USD | https://mdpabel.com |
          <span className="text-green-500 font-bold"> Active</span>
        </h3>
      </div>
      <SubscriptionButtons subscription_id={subscription.subscription_id} />
    </div>
  );
};

export default Subscription;
