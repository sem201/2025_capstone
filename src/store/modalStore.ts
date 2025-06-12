import { create } from "zustand";
import { EmergencyEvent } from "../types/types";

interface ModalStore {
  // isOpen: boolean;
  // setIsOpen: (isOpen: boolean) => void;
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
}

export const useModalStore = create<ModalStore>((set) => ({
  // isOpen: false,
  // setIsOpen: (isOpen) => set({ isOpen }),
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
}));
