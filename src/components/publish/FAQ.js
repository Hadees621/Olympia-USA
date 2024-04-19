"use client";

import React, { useState } from "react";
import publish from "@/utils/publish-with-us/publish.json";

const FAQ = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedSection((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="font-open-sans my-12 max-w-[420px] xl:max-w-[500px] 2xl:max-w-[650px] mx-auto">
      <p className="font-bold text-[20px] uppercase text-center lg:text-start">
        FAQS
      </p>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className={`mx-8 mt-10 gap-10 lg:mx-0`}
      >
        {publish.faqData.map((faq, index) => (
          <div
            key={index}
            className={`${
              expandedSection !== null && window.innerWidth >= 1024
                ? "border border-black my-5"
                : "my-5"
            }`}
          >
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className={`flex items-start justify-between w-full p-8 lg:p-6 lg:items-center font-semibold px-10 gap-3 ${
                  expandedSection === index
                    ? ""
                    : "bg-[#F9F7F6] lg:bg-white lg:border lg:border-black"
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
                  className={`w-10 h-10  lg:hidden shrink-0 ${
                    expandedSection === index ? "transform rotate-180" : ""
                  }`}
                >
                  <path fill="black" d="m7 10l5 5l5-5z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.5em"
                  height="0.5em"
                  viewBox="0 0 26 26"
                  className={`w-8 h-8  hidden lg:block shrink-0 ${
                    expandedSection === index ? "transform rotate-180" : ""
                  }`}
                >
                  <g fill="black">
                    <path d="m18.68 10.116l-6 5l.64.768l6-5z" />
                    <path d="m19.32 10.884l-6 5c-.512.427-1.152-.341-.64-.768l6-5c.512-.427 1.152.341.64.768" />
                    <path d="m6.68 10.884l6 5l.64-.768l-6-5z" />
                    <path d="m7.32 10.116l6 5c.512.427-.128 1.195-.64.768l-6-5c-.512-.427.128-1.195.64-.768" />
                    <path
                      fill-rule="evenodd"
                      d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"
                      clip-rule="evenodd"
                    />
                  </g>
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
