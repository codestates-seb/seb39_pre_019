import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Login from './page/Login';
import Signup from './page/Signup';
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {



  return (
    <BrowserRouter>
     <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}
 
export default App;