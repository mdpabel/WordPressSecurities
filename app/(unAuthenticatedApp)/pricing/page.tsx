import ComponentWrapper from "@/components/common/ComponentWrapper";
import React from "react";
import FAQ from "@/components/FAQ";
import PricingTables from "@/components/payment/PricingTables";

export const dynamic = "force-static";
export const revalidate = 86400;

const solutions = () => {
  return (
    <ComponentWrapper>
      <PricingTables />
      <FAQ />
    </ComponentWrapper>
  );
};

export default solutions;
