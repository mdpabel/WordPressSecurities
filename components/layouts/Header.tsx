import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = ({
  dashboard,
  isLoggedIn,
}: {
  dashboard?: boolean;
  isLoggedIn: boolean;
}) => {
  return (
    <>
      <TopBar />
      <Navbar isLoggedIn={isLoggedIn} dashboard={dashboard} />
    </>
  );
};

export default Header;
