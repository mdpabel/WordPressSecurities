import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import Hero from './Hero';
import ServiceSelection from './ServiceSelection';
import PricingTables from './PricingTables';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

interface IPage {
  searchParams: {
    type: 'subscription' | 'instant';
  };
}

const page = async ({ searchParams }: IPage) => {
  // const supabase = createServerComponentClient<Database>({ cookies });

  // const session = await supabase.auth.getUser();

  // const profile = await supabase
  //   .from('profile')
  //   .select('*')
  //   .eq('id', session?.data?.user?.id)
  //   .single();

  // console.log('profile ', profile);

  return (
    <ComponentWrapper>
      <Hero />
      <ServiceSelection />
      <PricingTables type={searchParams?.type ?? 'subscription'} />
    </ComponentWrapper>
  );
};

export default page;
