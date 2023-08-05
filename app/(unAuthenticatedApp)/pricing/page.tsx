import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import PricingTables from '../PricingTables';

interface IPage {
  searchParams: {
    type: 'subscription' | 'instant';
  };
}

const solutions = ({ searchParams }: IPage) => {
  return (
    <ComponentWrapper>
      <PricingTables type={searchParams?.type ?? 'subscription'} />
    </ComponentWrapper>
  );
};

export default solutions;
