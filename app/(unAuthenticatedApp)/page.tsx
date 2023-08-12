import ComponentWrapper from "@/components/ComponentWrapper";
import React from "react";
import Hero from "./Hero";
import ServiceCarousel from "./ServiceCarousel";
import PricingTables from "./PricingTables";

import { cookies } from "next/headers";
import { useUser } from "@/stores/user";
import ClientSideStateInitializer from "@/components/ClientSideStateInitializer";

interface IPage {
  searchParams: {
    type: "subscription" | "instant";
  };
}

const page = async ({ searchParams }: IPage) => {
  console.log(useUser.getState().email, useUser.getState().isLoggedIn);

  return (
    <ComponentWrapper>
      <Hero />
      <ServiceCarousel />
      <PricingTables type={searchParams?.type ?? "subscription"} />
    </ComponentWrapper>
  );
};

export default page;
