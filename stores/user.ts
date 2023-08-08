import { create } from "zustand";

interface UserStoreState {
  isLoggedIn: boolean;
  interval: string;
  isSubscribed: boolean;
  email: string;
  userId: string;
  stripeCustomer: string;
  isLoading: boolean;
}

export const useUser = create<UserStoreState>((set) => ({
  isLoggedIn: false,
  userId: "",
  interval: "",
  isSubscribed: false,
  stripeCustomer: "",
  email: "",
  isLoading: false,
}));
