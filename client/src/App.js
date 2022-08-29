import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Login from './page/Login';
import Signup from './page/Signup';
import Questions from './page/Questions';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import MyPage from './page/MyPage';
import Layout from './components/Layout';

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
          <Route path='/test' element={<Layout />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
