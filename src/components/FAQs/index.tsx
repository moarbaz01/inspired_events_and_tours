"use client";

import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "./data";

const FAQs = () => {
  return (
    <div className="py-12 px-4 md:px-6">
      <h1 className="md:text-4xl text-2xl font-bold text-center text-primary mb-8">
        Frequently Asked Questions
      </h1>

      <div className="pb-4">
        {faqs.map((faq, index) => (
          <Accordion key={index} className="py-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-primary-dark" />}
            >
              <p className="font-[600]">{faq.question}</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>{faq.answer}</p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
