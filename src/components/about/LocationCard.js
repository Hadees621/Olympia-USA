const LocationCard = ({ location, country, icon }) => {
  return (
    <div className="my-10 text-center space-y-6 font-bold">
      <img src={icon} alt={`logo-${country}`} />
      <h3>{location}</h3>
      <h3>{country}</h3>
    </div>
  );
};

export default LocationCard;
