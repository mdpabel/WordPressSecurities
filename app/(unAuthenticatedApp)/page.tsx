import ComponentWrapper from "@/components/ComponentWrapper";
import React from "react";
import Hero from "./Hero";
import ServiceCarousel from "./ServiceCarousel";
import PricingTables from "./PricingTables";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@/stores/user";
import ClientSideStateInitializer from "@/components/ClientSideStateInitializer";

interface IPage {
  searchParams: {
    type: "subscription" | "instant";
  };
}

const page = async ({ searchParams }: IPage) => {
  // const supabase = createServerComponentClient({
  //   cookies,
  // });

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (session) {
  //   useUser.setState({
  //     email: session?.user?.email,
  //     isLoggedIn: true,
  //     userId: session?.user?.id,
  //   });
  // }

  return (
    <ComponentWrapper>
      {/* <ClientSideStateInitializer
        email={session?.user?.email ?? ""}
        isLoggedIn={!!session?.user}
        userId={session?.user.id ?? ""}
      /> */}
      <Hero />
      <ServiceCarousel />
      <PricingTables type={searchParams?.type ?? "subscription"} />
    </ComponentWrapper>
  );
};

export default page;
