import { create } from "zustand";

type NewAccountState = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const useNewAccount = create<NewAccountState>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
