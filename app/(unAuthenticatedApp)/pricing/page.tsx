import ComponentWrapper from "@/components/common/ComponentWrapper";
import React from "react";
import FAQ from "@/components/FAQ";
import PricingTables from "@/components/payment/PricingTables";
import { SectionTitleWithSubTitle } from "@/components/common/Title";

export const dynamic = "force-static";
export const revalidate = 86400;

const solutions = () => {
  return (
    <ComponentWrapper>
      <div className="py-10">
        <SectionTitleWithSubTitle
          title="Safely Empower Your Digital Business"
          subTitle="Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites"
        />
        <PricingTables />
      </div>
      <FAQ />
    </ComponentWrapper>
  );
};

export default solutions;
