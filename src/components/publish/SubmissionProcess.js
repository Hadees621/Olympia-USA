import React from "react";

const SubmissionProcess = () => {
  return (
    <div className="text-center lg:text-left my-28">
      <p className="font-bold text-2xl lg:text-3xl 2xl:text-5xl mb-6">
        Submission Process
      </p>
      <div className="flex gap-6 justify-center lg:justify-start">
        {["one", "two", "three", "four"].map((number) => (
          <img
            key={number}
            src={`/assets/Submissions process/${number}.png`}
            alt={`Step ${number}`}
            className="w-full max-w-[200px] lg:max-w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default SubmissionProcess;
