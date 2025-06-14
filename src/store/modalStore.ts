import { create } from "zustand";
import { EmergencyEvent } from "../types/types";

interface ModalStore {
  isConfirmVisible: boolean;
  setIsConfirmVisible: (isVisible: boolean) => void;
  isLogFrameDetailEme: boolean;
  setIsLogFrameDetailEme: (isVisible: boolean) => void;
  isEmergency: boolean;
  setIsEmergency: (isEmergency: boolean) => void;
  isLocateVisible: boolean;
  setIsLocateVisible: (isVisible: boolean) => void;
  activePopups: EmergencyEvent[];
  setActivePopups: (popups: EmergencyEvent[]) => void;
  selectedPatient: any | null;
  setSelectedPatient: (patient: any | null) => void;
  shouldUpdateLogList: boolean;
  setShouldUpdateLogList: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isConfirmVisible: false,
  setIsConfirmVisible: (isConfirmVisible) => set({ isConfirmVisible }),
  isLogFrameDetailEme: false,
  setIsLogFrameDetailEme: (isLogFrameDetailEme) => set({ isLogFrameDetailEme }),
  isEmergency: false,
  setIsEmergency: (isEmergency) => set({ isEmergency }),
  isLocateVisible: false,
  setIsLocateVisible: (isLocateVisible) => set({ isLocateVisible }),
  activePopups: [],
  setActivePopups: (activePopups) => set({ activePopups }),
  selectedPatient: null,
  setSelectedPatient: (selectedPatient) => set({ selectedPatient }),
  shouldUpdateLogList: false,
  setShouldUpdateLogList: (value) =>
    set((state) => ({
      shouldUpdateLogList:
        typeof value === "function" ? value(state.shouldUpdateLogList) : value,
    })),
}));
