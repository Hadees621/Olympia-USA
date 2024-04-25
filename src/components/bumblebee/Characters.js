import React from "react";
import CharacterCard from "./CharacterCard";
import { charactersData } from "@/utils/bumblebee/utils";

const Characters = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen w-screen"
      style={{
        backgroundImage: "url('/assets/Bumblebee/Asset 1-45/Asset 14.png')",
      }}
    >
      <div className="absolute lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto my-16 2xl:my-28 inset-0">
        <div className=" text-white">
          <p className="text-[21px] font-bold font-droid-sans text-start">
            Meet our characters
          </p>
          {/* CARDS */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {charactersData.map((character, index) => (
              <CharacterCard key={index} character={character} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
