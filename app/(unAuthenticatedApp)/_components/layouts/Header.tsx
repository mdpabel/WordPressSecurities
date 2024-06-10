import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import { getProductTitleAndSlug } from '@/swell/product';
import dynamic from 'next/dynamic';

const Header = async ({ dashboard }: { dashboard?: boolean }) => {
  const solutionsSubmenu = await getProductTitleAndSlug();

  return (
    <>
      <TopBar />
      <Navbar solutionsSubmenu={solutionsSubmenu} dashboard={dashboard} />
    </>
  );
};

export default Header;
