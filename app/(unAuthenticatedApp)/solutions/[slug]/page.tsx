import React from "react";
import PricingCard from "../PricingCard";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import Description from "../Description";
import { notFound } from "next/navigation";
import { getServices, getServicesBySlug } from "@/lib/contentful";
import RecentWorks from "../RecentWorks";

export const revalidate = 86400;

type SolutionType = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((solution) => ({
    slug: solution?.slug,
  }));
}

const Solution = async ({ params }: SolutionType) => {
  const service = await getServicesBySlug(params?.slug);

  if (!service) {
    return notFound();
  }

  return (
    <ComponentWrapper className="space-y-8 pt-7">
      <SectionTitleWithSubTitle
        title={service.title}
        subTitle={service.subtitle}
      />
      <Description description={service?.description} />
      <RecentWorks portfolio={service?.portfolio} />
      <PricingCard
        price={service.price}
        items={service.items}
        subtitle={service.subtitle}
        title={service.title}
      />
    </ComponentWrapper>
  );
};

export default Solution;
