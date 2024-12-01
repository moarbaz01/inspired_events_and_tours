"use client";

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What should I pack for my trip?",
    answer:
      "We recommend packing light, comfortable clothing, essential toiletries, medications, and travel documents like your passport and flight tickets. Don't forget chargers and adaptors for your devices!",
  },
  {
    question: "Do I need travel insurance?",
    answer:
      "We highly recommend purchasing travel insurance to cover any unforeseen events such as trip cancellations, medical emergencies, or lost luggage. Please contact our team for more information on options.",
  },
  {
    question: "Can I modify my booking?",
    answer:
      "Yes, you can modify your booking depending on the terms of your package. Please contact our customer service team, and we will assist you with the changes.",
  },
  {
    question: "Are meals included in my package?",
    answer:
      "Meal inclusions vary by package. Please check the details of your itinerary or get in touch with our customer service to confirm the meal arrangements for your trip.",
  },
  {
    question: "How do I get to the airport?",
    answer:
      "We offer airport transfers for some destinations. If your package doesn't include transfers, we can help you arrange private transport. Please reach out to us to check availability.",
  },
];

const FAQs = () => {
  return (
    <div className="py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
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
