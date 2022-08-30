import create from 'zustand';
import axios from 'axios';

const useStore = create((set)=>({
    isLogin : false,
    data : [],
    
    
}))
  
export default useStore