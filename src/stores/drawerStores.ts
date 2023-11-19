import { create } from "zustand";

interface IDrawerState {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const useDrawerStore = create<IDrawerState>()((set) => ({
  isOpen: false,
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen }))
}));
