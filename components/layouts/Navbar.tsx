import React from "react";
import BigScreenNavbar from "./BigScreenNavbar";
import ComponentWrapper from "../common/ComponentWrapper";
import SmallScreenNavbar from "./SmallScreenNavbar";

export type MainHeaderType = {
  solutionsSubmenu: any;
  dashboard?: boolean;
};

const MainHeader = ({ solutionsSubmenu, dashboard }: MainHeaderType) => {
  return (
    <ComponentWrapper>
      <BigScreenNavbar solutionsSubmenu={solutionsSubmenu} />
      <SmallScreenNavbar
        dashboard={dashboard}
        solutionsSubmenu={solutionsSubmenu}
      />
    </ComponentWrapper>
  );
};

export default MainHeader;
