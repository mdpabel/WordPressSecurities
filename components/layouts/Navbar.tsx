import React from "react";
import BigScreenNavbar from "./BigScreenNavbar";
import ComponentWrapper from "../common/ComponentWrapper";
import SmallScreenNavbar from "./SmallScreenNavbar";

export type MainHeaderType = {
  isLoggedIn: boolean;
  dashboard?: boolean;
};

const MainHeader = ({ isLoggedIn, dashboard }: MainHeaderType) => {
  return (
    <ComponentWrapper>
      <BigScreenNavbar isLoggedIn={isLoggedIn} />
      <SmallScreenNavbar dashboard={dashboard} isLoggedIn={isLoggedIn} />
    </ComponentWrapper>
  );
};

export default MainHeader;
