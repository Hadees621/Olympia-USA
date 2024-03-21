import create from "zustand";

export const useSmNavbarStore = create((set) => ({
  menuOpen: false,
  booksMenuOpen: false,
  searchOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  toggleBooksMenu: () =>
    set((state) => ({ booksMenuOpen: !state.booksMenuOpen })),
  toggleSearchMenu: () => set((state) => ({ searchOpen: !state.searchOpen })),
}));

export const useNavbarStore = create((set) => ({
  menuOpen: false,
  booksMenuOpen: false,
  searchOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  toggleBooksMenu: () =>
    set((state) => ({ booksMenuOpen: !state.booksMenuOpen })),
  toggleSearchMenu: () => set((state) => ({ searchOpen: !state.searchOpen })),
}));
