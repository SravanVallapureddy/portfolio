import Login from'./pages/login/login'
import Home from './pages/home/home';
import './App.css';
import Register from './pages/Register/Register';
// import Topbar from './components/topbar/topbar';
import Profile from './pages/profile/profile';
import { Routes, Route} from 'react-router-dom';
import ProfileRightbar from './components/ProfileRightbar/ProfileRightbar';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/ProfileRightbar' element={<ProfileRightbar />}/>
        {/* <Route path='/OpenProfile' element={<OpenProfile />}/> */}
    </Routes>
    
  );
}

export default App;
