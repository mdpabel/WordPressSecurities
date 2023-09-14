import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AccordionTriggerType = ComponentPropsWithoutRef<"summary"> & {
  children: ReactNode;
};

const AccordionTrigger = ({ children, ...props }: AccordionTriggerType) => {
  return (
    <details>
      <summary
        {...props}
        className={cn(
          "list-none py-3 cursor-pointer after:content-['+'] after:absolute after:right-0 after:text-2xl after:font-bold transition duration-500 after:transition after:transform after:duration-300",
          props.className
        )}
      >
        {children}
      </summary>
    </details>
  );
};

type Accordion = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

const AccordionContent = ({ children, ...props }: Accordion) => {
  return <div className="content font-normal">{children}</div>;
};

const Accordion = ({ children, ...props }: Accordion) => {
  return (
    <div
      {...props}
      className={cn(
        "relative py-2 border-b border-b-gray-600 accordion-wrapper",
        props.className
      )}
    >
      {children}
    </div>
  );
};

export { AccordionContent, Accordion, AccordionTrigger };
