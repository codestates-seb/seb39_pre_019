import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  data: [],
  isLogin: false,
  isChange: false,
  isAnswer: false,
  toggleSubmit: true,
  setIsChange: () => set((state) => ({ isChange: !state.isChange })),
  setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  setToggleSubmit: () =>
    set((state) => ({ toggleSubmit: !state.toggleSubmit })),
  setIsAnswer: () => set((state) => ({ isAnswer: !state.isAnswer })),
}));

export default useStore;
