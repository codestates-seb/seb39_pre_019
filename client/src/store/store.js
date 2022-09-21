import axios from "axios";
import create from "zustand";

const useStore = create((set) => ({
  isLogin: false,
  isChange: true,
  isAnswer: false,
  toggleSubmit: true,
  setIsChange: () => set((state) => ({ isChange: !state.isChange })),
  setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  setToggleSubmit: () =>
    set((state) => ({ toggleSubmit: !state.toggleSubmit })),
  setIsAnswer: () => set((state) => ({ isAnswer: !state.isAnswer })),
  
  data1: [],
  setData: async()=>{
    const response = await axios.get('http://localhost:3001/qustions')
    set({data1: response.data})
  },

  inputValue : [],
  setInput: (input)=>set(()=>({inputValue:input}))
  
}));

export default useStore;
