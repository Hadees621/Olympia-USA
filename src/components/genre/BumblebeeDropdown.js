const BumblebeeDropdown = () => {
  const categories = [
    "Children's bestsellers",
    "Children's fiction",
    "Children's non-fiction",
  ];

  return (
    <div className="font-normal  space-y-2 font-open-sans">
      {categories.map((category, index) => (
        <p
          key={index}
          className="lg:text-[11px] xl:text-[12px] 2xl:text-[20px]"
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default BumblebeeDropdown;
