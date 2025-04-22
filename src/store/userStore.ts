import { create } from "zustand";

export type LocationType = "hall" | "room";

export interface UserLocation {
  id: string;
  type: LocationType;
  roomNumber?: string;
  x: number;
  y: number;
}

interface UserStore {
  userLocations: UserLocation[];
  setUserLocations: (locations: UserLocation[]) => void;
  addUserLocation: (location: UserLocation) => void;
  removeUserLocation: (id: string) => void;
  updateUserLocation: (id: string, location: Partial<UserLocation>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userLocations: [],
  setUserLocations: (locations) => set({ userLocations: locations }),
  addUserLocation: (location) =>
    set((state) => ({
      userLocations: [...state.userLocations, location],
    })),
  removeUserLocation: (id) =>
    set((state) => ({
      userLocations: state.userLocations.filter((loc) => loc.id !== id),
    })),
  updateUserLocation: (id, location) =>
    set((state) => ({
      userLocations: state.userLocations.map((loc) =>
        loc.id === id ? { ...loc, ...location } : loc
      ),
    })),
}));
