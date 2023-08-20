import Tabs from "@/components/Tabs";
import React from "react";
import Subscription from "./Subscription";
import CustomizablePricingTable from "./CustomizablePricingTable";
import { useTab } from "@/stores/tabs";

interface IPricingTableTitle {
  title: string;
  subTitle: string;
}

export const PricingTableTitle = ({ title, subTitle }: IPricingTableTitle) => {
  return (
    <div className="mx-auto max-w-screen-md text-center">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
        {title}
      </h2>
      <p className="mb-5 font-light text-gray-600 sm:text-xl ">{subTitle}</p>
    </div>
  );
};

const tabs = [
  {
    id: 1,
    label: "Recurring Subscriptions",
    type: "subscription",
  },

  {
    id: 2,
    label: "Instant Fixes",
    type: "instant",
  },
];

interface IPricingTables {
  type:
    | ("subscription" | "instant")
    | ("malware_removal" | "wp_security" | "prentration" | "ddos" | "errors");
}

const PricingTables = ({ type }: any) => {
  return (
    <div className="pt-10">
      {type === "subscription" ? (
        <PricingTableTitle
          title="Safely Empower Your Digital Business"
          subTitle="Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites"
        />
      ) : (
        <PricingTableTitle
          title="Emergency Rescue Services"
          subTitle="Get Your Website Back on Track in No Time - Swift and Effective Solutions for Critical Situations"
        />
      )}
      <div className="flex justify-center">
        <Tabs className="flex space-x-10  px-4 py-2 rounded-full" tabs={tabs} />
      </div>
      {type === "subscription" ? (
        <Subscription />
      ) : (
        <CustomizablePricingTable />
      )}
    </div>
  );
};

export default PricingTables;
