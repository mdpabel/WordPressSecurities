"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

const NProgressBar = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#fff"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default NProgressBar;
