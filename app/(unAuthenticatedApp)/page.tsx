import ComponentWrapper from "@/components/common/ComponentWrapper";
import Hero from "./Hero";
import ServiceCarousel from "../../components/payment/ServiceCarousel";
import PricingTables from "@/components/payment/PricingTables";
import FAQ from "@/components/FAQ";

const page = async () => {
  return (
    <ComponentWrapper>
      <Hero />
      <ServiceCarousel />
      <PricingTables />
      <FAQ items={[7, 1, 4, 6, 10]} />
    </ComponentWrapper>
  );
};

export default page;
