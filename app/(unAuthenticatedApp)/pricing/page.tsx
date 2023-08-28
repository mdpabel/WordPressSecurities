import ComponentWrapper from "@/components/common/ComponentWrapper";
import React from "react";
import PricingTables from "../PricingTables";
import FAQ from "@/components/FAQ";

interface IPage {
  searchParams: {
    type: "subscription" | "instant";
  };
}

const solutions = ({ searchParams }: IPage) => {
  return (
    <ComponentWrapper>
      <PricingTables type={searchParams?.type ?? "subscription"} />
      <FAQ />
    </ComponentWrapper>
  );
};

export default solutions;
