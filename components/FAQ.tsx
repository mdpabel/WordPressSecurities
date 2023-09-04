import React, { DetailsHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { SectionTitleWithSubTitle } from "./common/Title";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "./common/accordion";
import { faqData } from "@/data/faqData";
import { it } from "node:test";
import ComponentWrapper from "./common/ComponentWrapper";

type FAQProps =
  | {
      start?: number;
      end?: number;
    }
  | {
      total: number;
      start: number;
    }
  | {
      items: number[];
    };

const FAQ = (props: FAQProps) => {
  type faqTypes = {
    id: number;
    question: string;
    answer: string;
  }[];

  let data: faqTypes = [];

  if ("items" in props) {
    data = faqData.filter((f) => props.items.includes(f.id));
  } else if ("total" in props) {
    data = faqData.slice(props.start, props.total + props.start);
  } else {
    data = faqData.slice(props.start, props.end);
  }

  return (
    <ComponentWrapper className="space-x-5">
      <SectionTitleWithSubTitle
        subTitle="Exploring Answers to Common Inquiries, We're Here to Help!"
        title="Frequently Asked Questions"
      />
      <div>
        {data.map((item) => (
          <Accordion key={item.id}>
            <AccordionTrigger className="">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </Accordion>
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default FAQ;
