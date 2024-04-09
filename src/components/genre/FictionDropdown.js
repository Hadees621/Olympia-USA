const FictionDropdown = () => {
  const genres = [
    "Activity book",
    "Adult fiction",
    "Adventure",
    "Adventure & fantasy",
    "Animals",
    "Colouring books",
    "Crime",
    "General fiction",
    "Historical",
    "Horror",
    "Humour",
    "Middle grade fiction",
    "Mystery",
    "Poetry",
    "Romance",
    "Science-fiction",
    "Short stories",
    "Thriller",
    "War",
    "Young adult fiction",
  ];

  return (
    <div className="font-normal space-y-2 font-open-sans">
      {genres.map((genre, index) => (
        <p
          key={index}
          className="lg:text-[11px] xl:text-[12px] 2xl:text-[20px]"
        >
          {genre}
        </p>
      ))}
    </div>
  );
};

export default FictionDropdown;
