import { create } from "zustand";

export const useTab = create<{
  active: string;
  setActive: (type: string) => void;
}>((set) => ({
  active: "",
  setActive: (type: string) => set({ active: type }),
}));
