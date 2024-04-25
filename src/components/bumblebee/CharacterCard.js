import React from "react";

const CharacterCard = ({ character }) => {
  const { name, title, description, image, bgColor, rounded } = character;
  const roundedClass = rounded ? "rounded-3xl" : "";
  return (
    <div
      className={`flex text-black gap-6 xl:gap-12 p-5 xl:p-6 bg-[${bgColor}] hover:shadow ${roundedClass}`}
    >
      <div>
        <img src={image} alt="pic" />
      </div>
      <div className="flex flex-col justify-center text-[11px] xl:text-[12px]">
        <h1 className="font-bold uppercase">{name}</h1>
        <p className="font-courier-prime tracking-tight">{title}</p>
        <p className="max-w-[220px] mt-8 font-open-sans">{description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
