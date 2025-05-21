import { create } from "zustand";
import { UserLocation } from "@custom-types/types";

interface UserStore {
  userLocations: UserLocation[];
  setUserLocations: (locations: UserLocation[]) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userLocations: [],
  setUserLocations: (locations) => set({ userLocations: locations }),
}));
