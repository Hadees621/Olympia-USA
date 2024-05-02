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

// Fiction
export const useFictionStore = create((set) => ({
  fictionFlag: false,
  setFictionFlag: (fictionFlag) => set({ fictionFlag }),
}));

// books details
export const useBookDetailsStore = create((set) => ({
  bookDetails: null,
  setBookDetails: (details) => set({ bookDetails: details }),
}));
