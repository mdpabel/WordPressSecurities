import React from "react";
import Portfolio from "../Portfolio";
import PricingCard from "../PricingCard";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import Description from "../Description";
import { getAllSolution, getSolution } from "@/data/serviices";
import { notFound } from "next/navigation";

type SolutionType = {
  params: {
    solution: string;
  };
};

export async function generateStaticParams() {
  const solutions = getAllSolution();

  return solutions.map((solution) => ({
    solution: solution.page,
  }));
}

const Solution = ({ params }: SolutionType) => {
  const service = getSolution(params?.solution);

  if (!service) {
    return notFound();
  }

  return (
    <ComponentWrapper className="space-y-8 pt-7">
      <SectionTitleWithSubTitle
        title={service.title}
        subTitle={service.subTitle}
      />
      <Description solution={service?.data} />
      <Portfolio />
      <PricingCard />
    </ComponentWrapper>
  );
};

export default Solution;
