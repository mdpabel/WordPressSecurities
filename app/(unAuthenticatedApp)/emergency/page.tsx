import ComponentWrapper from "@/components/common/ComponentWrapper";
import { SectionTitleWithSubTitle } from "@/components/common/Title";
import CustomizablePricingTable from "@/components/payment/CustomizablePricingTable";

const Emergency = () => {
  return (
    <ComponentWrapper className="pt-10">
      <SectionTitleWithSubTitle
        title="Customize Your Security Package"
        subTitle="Get Your Website Back on Track in No Time - Swift and Effective Solutions for Critical Situations"
      />
      <CustomizablePricingTable />
    </ComponentWrapper>
  );
};

export default Emergency;
