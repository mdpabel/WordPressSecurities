import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = ({ dashboard }: { dashboard?: boolean }) => {
  return (
    <>
      <TopBar />
      <Navbar dashboard={dashboard} />
    </>
  );
};

export default Header;
