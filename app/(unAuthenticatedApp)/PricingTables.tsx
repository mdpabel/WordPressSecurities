import React from "react";
import Subscription from "./Subscription";
import CustomizablePricingTable from "./CustomizablePricingTable";
import { useTab } from "@/stores/tabs";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/Tabs";

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

const PricingTables = ({ type }: any) => {
  return (
    <div className="pt-10">
      <Tabs defaultValue="subscription" className="w-full">
        <TabsContent value="subscription">
          <PricingTableTitle
            title="Safely Empower Your Digital Business"
            subTitle="Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites"
          />
        </TabsContent>
        <TabsContent value="instant">
          <PricingTableTitle
            title="Emergency Rescue Services"
            subTitle="Get Your Website Back on Track in No Time - Swift and Effective Solutions for Critical Situations"
          />
        </TabsContent>
        <div className="w-full flex justify-center">
          <TabsList>
            <TabsTrigger className="text-base" value="subscription">
              Recurring Subscriptions
            </TabsTrigger>
            <TabsTrigger className="text-base" value="instant">
              Instant Fixes
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="subscription">
          <Subscription />
        </TabsContent>
        <TabsContent value="instant">
          <CustomizablePricingTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PricingTables;
