import Link from "next/link";
import React from "react";

const Text = ({ text, link }) => {
  if (!link) {
    return (
      <p className="font-semibold text-[#4A4949] text-[11.5px] font-open-sans">
        {text}
      </p>
    );
  }

  return (
    <Link href={link}>
      <p className="font-semibold text-[#4A4949] text-[11.5px] font-open-sans">
        {text}
      </p>
    </Link>
  );
};

export default Text;
