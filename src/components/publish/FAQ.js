"use client";

import React, { useState } from "react";
import publish from "@/utils/publish-with-us/publish.json";

const FAQ = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedSection((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="font-open-sans my-12">
      <p className="font-bold text-[20px] lg:hidden uppercase text-center">
        FAQS
      </p>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="mx-8 mt-10 space-y-5"
      >
        {publish.faqData.map((faq, index) => (
          <div key={index}>
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className={`flex items-start justify-between w-full p-8 font-semibold px-10 gap-3 ${
                  expandedSection === index ? "" : "bg-[#F9F7F6]"
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={expandedSection === index ? "true" : "false"}
                aria-controls={`accordion-collapse-body-${index + 1}`}
              >
                <span className="text-start">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  viewBox="0 0 24 24"
                  className={`w-10 h-10 shrink-0 ${
                    expandedSection === index ? "transform rotate-180" : ""
                  }`}
                >
                  <path fill="black" d="m7 10l5 5l5-5z" />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index + 1}`}
              className={`${expandedSection === index ? "block" : "hidden"}`}
              aria-labelledby={`accordion-collapse-heading-${index + 1}`}
            >
              <div className="py-5 px-10">
                <p className="text-black">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
