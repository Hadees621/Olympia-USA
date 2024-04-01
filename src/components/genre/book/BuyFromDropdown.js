"use client";
import React, { useState } from "react";

const BuyFromDropdown = () => {
  return (
    <div class="relative w-full md:w-[300px] lg:w-[320px] " data-twe-dropdown-ref>
      <div class="relative flex justify-center items-center mx-auto" data-twe-dropdown-ref>
        <button
          class="flex items-center justify-between w-full bg-[#C42222] px-6 py-3 text-sm leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out focus:shadow-primary-2 focus:outline-none focus:ring-0 font-semibold"
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
        {/* <ul
          class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
          aria-labelledby="dropdownMenuButton1ds"
          data-twe-dropdown-menu-ref
        >
          <li>
            <a
              class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
              href="#"
              data-twe-dropdown-item-ref
            >
              Action
            </a>
          </li>
          <li>
            <a
              class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
              href="#"
              data-twe-dropdown-item-ref
            >
              Another action
            </a>
          </li>
          <li>
            <a
              class="pointer-events-none block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-surface/40 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white/50 dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
              href="#"
              data-twe-dropdown-item-ref
            >
              Something else here
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default BuyFromDropdown;
