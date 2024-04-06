import { create } from "zustand";

type Data = { isDarkMode: boolean; updateData: <K extends keyof Data>(data: K, value: Data[K]) => void };

const useStore = create<Data>((set) => ({
  isDarkMode: false,
  updateData: (data, value) => set((state) => ({ ...state, [data]: value })),
}));

export default useStore;
