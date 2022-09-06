import create from "zustand";

const useStore = create((set) => ({
  data: [],
  isLogin: false,
  isChange: true,
  isAnswer: false,
  toggleSubmit: true,
  setIsChange: () => set((state) => ({ isChange: !state.isChange })),
  setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  setToggleSubmit: () =>
    set((state) => ({ toggleSubmit: !state.toggleSubmit })),
  setIsAnswer: () => set((state) => ({ isAnswer: !state.isAnswer })),
}));

export default useStore;
