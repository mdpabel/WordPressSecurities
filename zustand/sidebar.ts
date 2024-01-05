import { create } from "zustand";

export const useSidebar = create<{
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}>((set) => ({
  isOpen: false,
  setIsOpen: (val: boolean) =>
    set({
      isOpen: val,
    }),
}));
