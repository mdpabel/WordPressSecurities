import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import { getServicesSubMenus } from "@/lib/services";

const Header = async ({ dashboard }: { dashboard?: boolean }) => {
  const solutionsSubmenu = await getServicesSubMenus();

  return (
    <>
      <TopBar />
      <Navbar solutionsSubmenu={solutionsSubmenu} dashboard={dashboard} />
    </>
  );
};

export default Header;
