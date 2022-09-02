import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  data: [],
  isLogin: false,
  setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  //   displayName: "",
  //   setDisplayNameStore: (input) =>
  //     set((state) => ({ ...(state.displayName + input) })),
  isAnswer: false,
  toggleSubmit: true,
  setToggleSubmit: () =>
    set((state) => ({ toggleSubmit: !state.toggleSubmit })),
  setIsAnswer: () => set((state) => ({ isAnswer: !state.isAnswer })),
}));

export default useStore;
