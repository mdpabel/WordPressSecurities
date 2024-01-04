import React from 'react';
import { SectionTitleWithSubTitle } from './ui/Title';
import { Accordion, AccordionContent, AccordionTrigger } from './ui/accordion';
import { faqData } from '@/data/faqData';

type FAQProps = {
  title?: boolean;
} & (
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
    }
);

const FAQ = (props: FAQProps) => {
  type faqTypes = {
    id: number;
    question: string;
    answer: string;
  }[];

  let data: faqTypes = [];

  if ('items' in props) {
    data = faqData.filter((f) => props.items.includes(f.id));
  } else if ('total' in props) {
    data = faqData.slice(props.start, props.total + props.start);
  } else {
    data = faqData.slice(props.start, props.end);
  }

  return (
    <div>
      {props.title !== false && (
        <SectionTitleWithSubTitle
          subTitle="Exploring Answers to Common Inquiries, We're Here to Help!"
          title='Frequently Asked Questions'
        />
      )}
      <div>
        {data.map((item) => (
          <Accordion key={item.id}>
            <AccordionTrigger className=''>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
