import Dropdownsvg from "./dropdownsvg";

export const DropdownItem = ({
  title,
  showDropdown,
  toggleDropdown,
  children,
}) => (
  <div
    className={`flex items-center justify-between ${
      showDropdown ? "py-4" : "border-b py-4"
    }`}
    onClick={toggleDropdown}
  >
    <h1>{title}</h1>
    <Dropdownsvg />
    {showDropdown && children}
  </div>
);
