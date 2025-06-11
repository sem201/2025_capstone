import { create } from "zustand";
import { UserLocation } from "@custom-types/types";

interface UserStore {
  userLocations: UserLocation[];
  selectedUser: UserLocation | null;
  setUserLocations: (locations: UserLocation[]) => void;
  updateUserLocation: (data: UserLocation) => void;
  setSelectedUser: (user: UserLocation | null) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  userLocations: [],
  selectedUser: null,
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
  setSelectedUser: (user) => set({ selectedUser: user }),
}));
