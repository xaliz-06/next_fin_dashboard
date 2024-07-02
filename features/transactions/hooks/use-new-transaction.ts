import { create } from "zustand";

type NewTransactionState = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const useNewTransaction = create<NewTransactionState>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
