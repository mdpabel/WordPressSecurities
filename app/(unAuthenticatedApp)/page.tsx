import ComponentWrapper from "@/components/ComponentWrapper";
import { startTransition } from "react";
import Hero from "./Hero";
import ServiceCarousel from "./ServiceCarousel";
import PricingTables from "./PricingTables";

interface IPage {
  searchParams: {
    type: "subscription" | "instant";
  };
}

const page = async ({ searchParams }: IPage) => {
  return (
    <ComponentWrapper>
      <Hero />
      <ServiceCarousel />
      <PricingTables type={searchParams?.type ?? "subscription"} />
    </ComponentWrapper>
  );
};

export default page;
