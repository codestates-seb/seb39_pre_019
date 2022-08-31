import create from 'zustand';
import axios from 'axios';

const useStore = create((set)=>({
    data : [],
    isLogin : false,
    isAnswer : false,
    toggleSubmit : true,
    setToggleSubmit : () => set((state)=>({toggleSubmit: !state.toggleSubmit})),
    setIsAnswer : () => set((state)=>({ isAnswer: !state.isAnswer}))
}))
  
export default useStore