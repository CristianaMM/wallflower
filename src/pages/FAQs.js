import React from "react";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { faqs } from "../utils";

export default function FAQs() {
  return (
    <div className="container faq">
      <h1 className="text-center">Frequently Asked Questions</h1>
      <p className="text-center">
        <Link to={"/contact"}>Contact us</Link> if you are unable to find the
        answer to your question.
      </p>

      <Accordion className="py-5" allowZeroExpanded={true}>
        {faqs.map((q, i) => {
          return (
            <AccordionItem key={`FAQ-item-${i}`}>
              <AccordionItemHeading>
                <AccordionItemButton className="question py-3">
                  <i className={"iconRight bi bi-chevron-compact-right"}></i>
                  <i className={"iconDown bi bi-chevron-compact-down"}></i>
                  {q.q}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div
                  className="answer"
                  dangerouslySetInnerHTML={{
                    __html: q.a,
                  }}
                ></div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
