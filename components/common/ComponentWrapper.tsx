import { cn } from "@/lib/utils";
import React, { HTMLAttributes, ReactNode } from "react";

interface ComponentWrapperType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ComponentWrapper = ({
  children,
  className = "",
}: ComponentWrapperType) => {
  return (
    <div
      className={cn(
        `container max-w-7xl md:w-[90%] mx-auto px-4 md:px-0 `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ComponentWrapper;
