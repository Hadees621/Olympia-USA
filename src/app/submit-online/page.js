"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/request-review/SectionTitle";
import InputField from "@/components/request-review/InputField";

const Page = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookImage, setBookImage] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [wordsCount, setWordsCount] = useState("");
  const [description, setDescription] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [pages, setPages] = useState("");
  const [size, setSize] = useState("");
  const [imprint, setImprint] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/v1/bookPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookTitle,
          authorName,
          bookImage,
          bookGenre,
          wordsCount,
          description,
          moreInfo,
          fullDescription,
          isbn,
          publishedDate,
          pages,
          size,
          imprint,
        }),
      });

      if (response.ok) {
        console.log("Submission successful");
        setBookTitle("");
        setAuthorName("");
        setBookImage("");
        setBookGenre("");
        setWordsCount("");
        setDescription("");
        setMoreInfo("");
        setFullDescription("");
        setIsbn("");
        setPublishedDate("");
        setPages("");
        setSize("");
        setImprint("");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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

          <InputField
            label="Book Title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <InputField
            label="Author Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <InputField
            label="Book Image"
            value={bookImage}
            onChange={(e) => setBookImage(e.target.value)}
          />

          <div className="flex w-full gap-4 my-4">
            <div className="w-[50%] lg:w-[60%]">
              <InputField
                label="Genre"
                value={bookGenre}
                onChange={(e) => setBookGenre(e.target.value)}
              />
            </div>
            <div className="w-[50%] lg:w-[40%]">
              <InputField
                label="Word count (numbers only)"
                value={wordsCount}
                onChange={(e) => setWordsCount(e.target.value)}
                showRequiredText={false}
              />
            </div>
          </div>

          {/* <InputField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            label="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
          <InputField
            label="Published Date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
          <InputField
            label="Pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
          <InputField
            label="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <InputField
            label="Imprint"
            value={imprint}
            onChange={(e) => setImprint(e.target.value)}
          /> */}

          <div className="pt-14 pb-28 lg:py-10 hidden lg:block">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              disabled={false}
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
