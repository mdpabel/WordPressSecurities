import React from "react";
import Portfolio from "../Portfolio";
import PricingCard from "../PricingCard";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import Description from "../Description";

type SolutionType = {
  params: {
    solution: string;
  };
};

const Solution = ({ params }: SolutionType) => {
  const service = {
    title: "Blacklist Removal",
    explanation: "",
    Portfolio: "",
    Pricing: "",
  };
  return (
    <ComponentWrapper className="space-y-8 pt-5">
      <SectionTitleWithSubTitle
        title="Malware Removal Services"
        subTitle="Get Your Website Clean and Secure from Malicious Threats"
      />
      <Description />
      <Portfolio />
      <PricingCard />
    </ComponentWrapper>
  );
};

export default Solution;
