import FAQ from "@/components/FAQ";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import React from "react";

export const dynamic = "force-static";
export const revalidate = 86400;

const page = () => {
  return (
    <ComponentWrapper>
      <FAQ />
    </ComponentWrapper>
  );
};

export default page;
