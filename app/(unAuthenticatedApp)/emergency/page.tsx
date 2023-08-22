import ComponentWrapper from "@/components/common/ComponentWrapper";
import { PricingTableTitle } from "../PricingTables";
import CustomizablePricingTable from "../CustomizablePricingTable";

const Emergency = () => {
  return (
    <ComponentWrapper className="pt-10">
      <PricingTableTitle
        title="Customize Your Security Package"
        subTitle="Get Your Website Back on Track in No Time - Swift and Effective Solutions for Critical Situations"
      />
      <CustomizablePricingTable />
    </ComponentWrapper>
  );
};

export default Emergency;
