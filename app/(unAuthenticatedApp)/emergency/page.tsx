import ComponentWrapper from "@/components/common/ComponentWrapper";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import PricingTables from "@/components/payment/PricingTables";

export const dynamic = "force-static";
export const revalidate = 86400;

const Emergency = () => {
  return (
    <ComponentWrapper className="pt-10">
      <SectionTitleWithSubTitle
        title="Customize Your Security Package"
        subTitle="Get Your Website Back on Track in No Time - Swift and Effective Solutions for Critical Situations"
      />
      <PricingTables />
    </ComponentWrapper>
  );
};

export default Emergency;
