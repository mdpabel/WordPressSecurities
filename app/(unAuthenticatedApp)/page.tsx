import ComponentWrapper from "@/components/ComponentWrapper";
import React from "react";
import Hero from "./Hero";
import ServiceSelection from "./ServiceSelection";
import PricingTables from "./PricingTables";

interface IPage {
  searchParams: {
    type: "subscription" | "instant";
  };
}

const page = async ({ searchParams }: IPage) => {
  return (
    <ComponentWrapper>
      {/* <ClientSideStateInitializer
        email={session?.user?.email ?? ""}
        isLoggedIn={!!session?.user}
        userId={session?.user.id ?? ""}
      /> */}
      <Hero />
      <ServiceSelection />
      <PricingTables type={searchParams?.type ?? "subscription"} />
    </ComponentWrapper>
  );
};

export default page;
