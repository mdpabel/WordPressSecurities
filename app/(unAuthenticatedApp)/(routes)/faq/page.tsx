import FAQ from '@/app/(unAuthenticatedApp)/_components/FAQ';
import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';

export const dynamic = 'force-static';

const page = () => {
  return (
    <ComponentWrapper>
      <FAQ />
    </ComponentWrapper>
  );
};

export default page;
