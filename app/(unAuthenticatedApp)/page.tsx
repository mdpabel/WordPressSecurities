import ComponentWrapper from "@/components/common/ComponentWrapper";
import Hero from "./Hero";
import ServiceCarousel from "../../components/payment/ServiceCarousel";
import FAQ from "@/components/FAQ";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import PricingTables from "@/components/payment/PricingTables";

export const dynamic = "force-static";
export const revalidate = 86400;

const page = async () => {
  return (
    <ComponentWrapper>
      <Hero />
      <ServiceCarousel />
      <div className="py-10">
        <SectionTitleWithSubTitle
          title="Safely Empower Your Digital Business"
          subTitle="Lock Down Your Digital Assets - Clearly Defined Subscription Tiers -
        Engineered for Small to Large-scale Websites"
        />
        <PricingTables />
      </div>
      <FAQ items={[7, 1, 4, 6, 10]} />
    </ComponentWrapper>
  );
};

export default page;
