import { create } from "zustand";
import { UserLocation } from "@custom-types/types";

interface UserStore {
  userLocations: UserLocation[];
  setUserLocations: (locations: UserLocation[]) => void;
  updateUserLocation: (data: UserLocation) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  userLocations: [],
  setUserLocations: (locations) => set({ userLocations: locations }),
  updateUserLocation: (data) => {
    const current = get().userLocations;
    const index = current.findIndex((loc) => loc.id === data.id);
    if (index === -1) {
      set({ userLocations: [...current, data] });
    } else {
      const newArr = [...current];
      newArr[index] = data;
      set({ userLocations: newArr });
    }
  },
}));
