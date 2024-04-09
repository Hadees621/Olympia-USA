const NonfictionDropdown = () => {
  const categories = [
    "Autobiographical",
    "Biographical & memoirs",
    "Educational",
    "Food & drink",
    "Health",
    "Lifestyle",
    "Memoirs",
    "Personal development",
    "Pets",
    "Philosophy",
    "Religion",
    "Self help",
    "Spirituality",
    "Sport",
    "Travel and holidays",
  ];

  return (
    <div className="font-normal space-y-2 font-open-sans">
      {categories.map((category, index) => (
        <p
          key={index}
          className="text-[11px] xl:text-[12px] 2xl:text-[15px]"
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default NonfictionDropdown;
