import React, { DetailsHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PropsType = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

const AccordionTrigger = ({ children, ...props }: PropsType) => {
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

const AccordionContent = ({ children, ...props }: PropsType) => {
  return <div className="content font-normal">{children}</div>;
};

const Accordion = ({ children, ...props }: PropsType) => {
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
