import { create } from "zustand";

// small screen navbar
export const useSmNavbarStore = create((set) => ({
  menuOpen: false,
  booksMenuOpen: false,
  searchOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  toggleBooksMenu: () =>
    set((state) => ({ booksMenuOpen: !state.booksMenuOpen })),
  toggleSearchMenu: () => set((state) => ({ searchOpen: !state.searchOpen })),
}));

// Normal screen Navbar
export const useNavbarStore = create((set) => ({
  booksDropdownOpen: false,
  searchDropdownOpen: false,
  toggleBooksDropdown: () =>
    set((state) => ({ booksDropdownOpen: !state.booksDropdownOpen })),
  toggleSearchDropdown: () =>
    set((state) => ({ searchDropdownOpen: !state.searchDropdownOpen })),
}));

//  sortby dropdown
export const useSortByStore = create((set) => ({
  menuOpened: false,
  showDropdown: false,
  sortByDropdown: false,
  showFilterOptions: false,
  showDropdown1: false,
  showDropdown2: false,
  showDropdown3: false,
  title: "SORT BY",

  setTitle: (newTitle) => set({ title: newTitle }),
  setMenu: () =>
    set((state) => {
      if (state.sortByDropdown || state.showFilterOptions) {
        return { menuOpened: true };
      }
      return { menuOpened: false };
    }),
  setShowDropdown: () =>
    set((state) => ({ showDropdown: !state.showDropdown })),
  setSortByDropdown: () =>
    set((state) => ({ sortByDropdown: !state.sortByDropdown })),
  toggleShowFilterOptions: () =>
    set((state) => ({ showFilterOptions: !state.showFilterOptions })),
  toggleDropdown1: () =>
    set((state) => ({ showDropdown1: !state.showDropdown1 })),
  toggleDropdown2: () =>
    set((state) => ({ showDropdown2: !state.showDropdown2 })),
  toggleDropdown3: () =>
    set((state) => ({ showDropdown3: !state.showDropdown3 })),
}));

// Bumblebee
export const useBumblebeeStore = create((set) => ({
  flag: false,
  setFlag: (flag) => set({ flag }),
}));

// books details
export const useBookDetailsStore = create((set) => ({
  bookDetails: null,
  setBookDetails: (details) => set({ bookDetails: details }),
}));

export const useBookStore = create((set) => ({
  recentBook: {
    src: "/assets/Books/Asset5.png",
    author: "Rudi Jennings",
    description: `Rudi Michael Jennings spent the majority of his childhood growing up in the Norfolk countryside of fields and trees, really living amongst nature and possibly giving the basis of description in his book.`,
    moreInfo: "+ MORE ABOUT RUDI JENNINGS",
    title: "THE LAST MYON",
    fullDescription: `The Last Myon is a story of fantasy adventure, revenge and an individual's total unwillingness to submit or to fail, battling against overwhelming natural elements and a group of hardened, sadistic creatures who will stop at nothing to succeed in his capture and slavery. In an everlasting winter world, Ackrehm, the last of his Myon kind, must fight for his life, sustaining multiple injuries along the way and still demonstrating he truly is a force to be reckoned with. Struggling with exhaustion, both mentally and physically, will he manage to overcome, or will he fight or flee? One thing is for certain, The Last Myon will keep you hooked until the very end, bonding with characters and excitedly reading on with an obsession to find out what happens next, promoting an ethos to take away of never give up, never surrender.`,
    isbn: "9781848979345",
    publishedDate: "30/11/2017",
    pages: 147,
    size: "205x140mm",
    imprint: "Olympia Publishers",
  },
}));
