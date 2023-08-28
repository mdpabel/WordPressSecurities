import ComponentWrapper from "@/components/common/ComponentWrapper";
import Hero from "./Hero";
import ServiceCarousel from "./ServiceCarousel";
import PricingTables from "./PricingTables";

const page = async () => {
  return (
    <ComponentWrapper>
      <Hero />
      <ServiceCarousel />
      <PricingTables />
    </ComponentWrapper>
  );
};

export default page;
