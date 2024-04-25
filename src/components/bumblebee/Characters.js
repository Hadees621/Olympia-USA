import React from "react";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const charactersData = [
    {
      name: "Character 1",
      title: "Book title 1",
      description:
        "About character 1, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Ut wisi enim ad minim veniam",
      image: "/assets/Bumblebee/Asset 1-45/Asset 20.png",
      bgColor: "#FFE67D",
      rounded: true,
    },
    {
      name: "Character 2",
      title: "Book title 2",
      description:
        "About character 2, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Ut wisi enim ad minim veniam",
      image: "/assets/Bumblebee/Asset 1-45/Asset 21.png",
      bgColor: "#FFD4E9",
      rounded: false,
    },
    {
      name: "Character 3",
      title: "Book title 3",
      description:
        "About character 3, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Ut wisi enim ad minim veniam",
      image: "/assets/Bumblebee/Asset 1-45/Asset 22.png",
      bgColor: "#9FEDAC",
      rounded: false,
    },
    {
      name: "Character 4",
      title: "Book title 4",
      description:
        "About character 4, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Ut wisi enim ad minim veniam",
      image: "/assets/Bumblebee/Asset 1-45/Asset 23.png",
      bgColor: "#AAC6FC",
      rounded: true,
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center h-screen w-screen"
      style={{
        backgroundImage: "url('/assets/Bumblebee/Asset 1-45/Asset 14.png')",
      }}
    >
      <div>
        <div className="absolute lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px] mx-auto 2xl:my-28 inset-0 ">
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
    </div>
  );
};

export default Characters;
