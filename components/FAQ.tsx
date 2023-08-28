import React from "react";
import { SectionTitleWithSubTitle } from "./common/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/common/accordion";
import { faqData } from "@/data/faqData";

const FAQ = () => {
  return (
    <div className="space-x-5">
      <SectionTitleWithSubTitle
        subTitle="Exploring Answers to Common Inquiries U+2013 We're Here to Help!"
        title="Frequently Asked Questions"
      />

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq) => (
          <AccordionItem
            key={faq.id}
            className="text-base"
            value={faq.title + " - " + faq.id}
          >
            <AccordionTrigger className="text-base">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
