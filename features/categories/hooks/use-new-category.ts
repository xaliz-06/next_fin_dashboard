import { create } from "zustand";

type NewCategoryState = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const useNewCategory = create<NewCategoryState>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
