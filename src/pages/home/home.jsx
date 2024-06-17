import './home.css'
// import Login from'./pages/login/login.jsx';
// import Register from './pages/Register/Register';
import Topbar from '../../components/topbar/topbar.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Feed from '../../components/feed/feed.jsx';
import Rightbar from '../../components/rightbar/rightbar.jsx';

export default function Home(){
    return(
        <>
            <Topbar />
            <div className='homeContainer'>
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}