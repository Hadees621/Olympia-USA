"use client";

import { useBumblebeeStore } from "@/stores/States";

const BuyFromDropdown = () => {
  const { flag } = useBumblebeeStore();
  const baseColorClass = flag
    ? "bg-[#FCC30B] text-black"
    : "bg-[#C42222] text-white";
  return (
    <div
      class="relative w-full md:w-[300px] lg:w-[320px] "
      data-twe-dropdown-ref
    >
      <div
        class="relative flex justify-center items-center mx-auto"
        data-twe-dropdown-ref
      >
        <button
          className={`flex items-center justify-between w-full ${baseColorClass} px-6 py-3 text-sm leading-normal  shadow-primary-3 transition duration-150 ease-in-out focus:shadow-primary-2 focus:outline-none focus:ring-0 font-semibold`}
          type="button"
          id="dropdownMenuButton1ds"
          data-twe-dropdown-toggle-ref
          aria-expanded="false"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          BUY FROM
          <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m7 10l5 5l5-5z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default BuyFromDropdown;
