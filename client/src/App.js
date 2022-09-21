import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Questions from "./page/Questions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from "./page/MyPage";
import DetailQuestion from "./components/DetailQuestion";
import UserEdit from "./page/UserEdit";
import AskPage from "./page/AskPage";
import Logout from "./page/Logout";
import TestLogin from "./components/TestLogin";
import AnswerView from "./page/AnswerView";
import QuestionView from "./page/QuestionView";
import UserDelete from "./page/UserDelete";
import axios from "axios";
import useStore from './store/store'
import { useEffect } from "react";




function App() {
  const {data1,setData,setInput,inputValue} 
  = useStore()
  // useEffect(()=>{
  //   setData()
  // },[])
  const handelTitle = (e) => {
    setInput(e.target.value)
  }
  console.log(inputValue)


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Questions />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/mypage' element={<MyPage />}></Route>
        <Route path='/:id' element={<DetailQuestion />}></Route>
        <Route path='/useredit' element={<UserEdit />}></Route>
        <Route path='/askpage' element={<AskPage />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/test' element={<TestLogin />}></Route>
        <Route path='/answerview' element={<AnswerView />}></Route>
        <Route path='/questionview' element={<QuestionView />}></Route>
        <Route path='/userdelete' element={<UserDelete />}></Route>
      </Routes>
      <input onChange={handelTitle}/>
    </BrowserRouter>
  );
}

export default App;
