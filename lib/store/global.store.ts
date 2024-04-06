import { create } from "zustand";
import { ReviewType } from "../types/global";
import { dummyReviews } from "../data/reviews";

type Data = {
  isDarkMode: boolean;
  reviews: ReviewType[];
  updateData: <K extends keyof Data>(data: K, value: Data[K]) => void;
};

const useStore = create<Data>((set) => ({
  isDarkMode: false,
  reviews: dummyReviews,
  updateData: (data, value) => set((state) => ({ ...state, [data]: value })),
}));

export default useStore;
