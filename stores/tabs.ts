import { create } from "zustand";

export const useTab = create<{
  active: string;
}>((set) => ({
  active: "",
}));
