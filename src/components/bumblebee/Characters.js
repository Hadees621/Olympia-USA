import React from "react";
import CharacterCard from "./CharacterCard";
import { charactersData } from "@/utils/bumblebee/utils";

const Characters = () => {
  return (
    <div
      className="relative bg-cover bg-center w-screen h-0 lg:h-[700px] xl:h-[800px] 2xl:h-[900px] hidden lg:block"
      style={{
        backgroundImage: "url('/assets/Bumblebee/Asset 1-45/Asset 14.png')",
      }}
    >
      <div className="lg:absolute lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto my-16 2xl:my-28 inset-0">
        <div className=" text-white">
          <p className="text-[21px] font-bold font-droid-sans text-start text-black my-8">
            Meet our characters
          </p>
          {/* CARDS */}
          <div className="grid mx-8 lg:grid-cols-2 gap-6 w-full">
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
