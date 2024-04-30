import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import { getProductTitleAndSlug } from '@/swell/product';

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
