import React from "react";

const SmCategories = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-3xl pb-6">BROWSE BY CATEGORIES</h1>
      <div className="flex flex-col w-full px-6 my-12 space-y-10">
        {categories.map((category, index) => (
          <div key={index} className="flex w-full px-5 gap-8">
            <img
              src={category.image}
              alt={category.name}
              width={120}
              height={120}
            />
            <div
              className={`bg-${category.color} p-6 w-full flex items-center justify-center my-6 font-bold`}
            >
              <p className="text-2xl">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const categories = [
  { name: "FANTASY", image: "/Home/Mobile/Asset 16.png", color: "green-50" },
  { name: "MYSTERY", image: "/Home/Mobile/Asset 17.png", color: "[#F6F3FD]" },
  { name: "LIFESTYLE", image: "/Home/Mobile/Asset 18.png", color: "[#FFF1F0]" },
];

export default SmCategories;
