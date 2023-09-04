import ComponentWrapper from "@/components/common/ComponentWrapper";
import React from "react";
import FAQ from "@/components/FAQ";
import PricingTables from "@/components/payment/PricingTables";

interface IPage {
  searchParams: {
    type: "subscription" | "instant";
  };
}

const solutions = ({ searchParams }: IPage) => {
  return (
    <ComponentWrapper>
      <PricingTables />
      <FAQ />
    </ComponentWrapper>
  );
};

export default solutions;
