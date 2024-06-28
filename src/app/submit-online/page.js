"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/request-review/SectionTitle";
import InputField from "@/components/request-review/InputField";

const Page = () => {
  const [formData, setFormData] = useState({
    id: "",
    bookTitle: "",
    authorName: "",
    bookImage: "",
    wordsCount: "",
    bookGenre: "",
    description: "",
    isbn: "",
    publishedDate: "",
    pages: "",
    size: "",
    imprint: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/v1/bookPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Submission successful");
        setFormData({
          id: "",
          bookTitle: "",
          authorName: "",
          bookImage: "",
          wordsCount: "",
          bookGenre: "",
          description: "",
          isbn: "",
          publishedDate: "",
          pages: "",
          size: "",
          imprint: "",
        });
        setSubmissionStatus({
          success: true,
          message: "Book added successfully!",
        });
      } else {
        console.error("Submission failed");
        setSubmissionStatus({
          success: false,
          message: "Failed to add book. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1350px] lg:mx-auto bg-[#FFFFFF]">
      <form
        onSubmit={handleSubmit}
        className="font-open-sans mx-8 space-y-5 md:space-y-0 my-10 md:max-w-[420px] md:mx-auto lg:max-w-[440px] xl:max-w-[550px] 2xl:max-w-[750px] lg:mx-auto"
      >
        <div className="md:border border-black md:p-8 xl:p-12 space-y-4 lg:space-y-6 lg:py-6">
          <SectionTitle number="01" title="ABOUT YOU" SmallTitle="About you" />

          {Object.keys(formData).map((key) => (
            <InputField
              key={key}
              label={key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          ))}

          {submissionStatus && (
            <div
              className={`mt-4 p-4 rounded-md ${
                submissionStatus.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submissionStatus.message}
            </div>
          )}

          <div className="pt-14 pb-28 lg:py-10 hidden lg:block">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              SUBMIT REQUEST
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
