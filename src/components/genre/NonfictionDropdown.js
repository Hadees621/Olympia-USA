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
    <div className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[15px] space-y-2">
      {categories.map((category, index) => (
        <p key={index}>{category}</p>
      ))}
    </div>
  );
};

export default NonfictionDropdown;
