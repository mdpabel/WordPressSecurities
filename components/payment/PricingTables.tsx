import React, { Suspense } from "react";
import Subscription from "./Subscription";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/Tabs";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import CustomizablePricingTable from "./CustomizablePricingTable";

const PricingTables = () => {
  return (
    <div className="pt-10">
      <Tabs defaultValue="subscription" className="w-full">
        <TabsContent value="subscription">
          <SectionTitleWithSubTitle
            title="Safely Empower Your Digital Business"
            subTitle="Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites"
          />
        </TabsContent>
        <TabsContent value="instant">
          <SectionTitleWithSubTitle
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
