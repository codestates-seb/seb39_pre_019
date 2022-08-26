import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Login from './page/Login';
import Signup from './page/Signup';
import Questions from './page/Questions';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import MyPage from "./page/MyPage";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path='/' element={<Questions />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login/mypage' element={<MyPage />}></Route>
       </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
