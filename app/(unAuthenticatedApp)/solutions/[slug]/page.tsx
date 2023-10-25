import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Title } from "@/components/common/Title";
import React from "react";
import PricingTables from "@/components/payment/PricingTables";
import FAQ from "@/components/FAQ";
import Carousel from "../Carousel";
import AboutService from "../AboutService";
import PricingTable from "../PricingTable";

const Solution = () => {
  return (
    <ComponentWrapper className="pt-10">
      <div className="grid grid-cols-3 space-x-8">
        <div className="col-span-3 md:col-span-2 space-y-6">
          <Title className="text-2xl md:text-3xl">
            I will remove malware, fix redirecting issues and blacklist removal
          </Title>
          <Carousel />
          <div className="md:hidden pt-10">
            <PricingTables />
          </div>
          <AboutService />
          <div>
            <Title>Frequently Asked Questions</Title>
            <FAQ title={false} items={[1, 2, 3, 4, 5]} />
          </div>
        </div>
        <div className="hidden md:block col-span-1">
          <PricingTable />
        </div>
      </div>
      <div className="mt-5 md:mt-10">
        <Title>More services by WordPressSecurities</Title>
      </div>
    </ComponentWrapper>
  );
};

export default Solution;
