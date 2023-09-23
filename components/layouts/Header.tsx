import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = ({
  dashboard,
  solutionsSubmenu,
}: {
  dashboard?: boolean;
  solutionsSubmenu: any;
}) => {
  return (
    <>
      <TopBar />
      <Navbar solutionsSubmenu={solutionsSubmenu} dashboard={dashboard} />
    </>
  );
};

export default Header;
