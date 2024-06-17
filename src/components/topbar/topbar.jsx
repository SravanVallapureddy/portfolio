import './topbar.css'
import {Search, Person, Chat, Notifications, Logout} from '@mui/icons-material';
import { Link } from 'react-router-dom';
// import Profile from '../../pages/profile/profile';

export default function Topbar(){
    return(
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">SravanMedia</span>
                </div>
                <div className="topbarCenter">
                    <div className='searchbar'>
                        <Search className='searchIcon'/>
                        <input 
                            type="text" placeholder='Search for friend, post or video' 
                            className='searchInput' 
                        />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className='topbarLinks'>
                        <span className='topbarLink'>
                            <Link to='/' style={{textDecoration: 'none', color: 'white'}}> Homepage </Link>
                        </span>
                        <span className='topbarLink'>Timeline</span>
                    </div>
                    <div className='topbarIcons'>
                        <div className='topbarIcon'>
                            <Person />
                            <span className='topbarIconBadge'>1</span>
                        </div>
                        <div className='topbarIcon'>
                            <Chat />
                            <span className='topbarIconBadge'>2</span>
                        </div>
                        <div className='topbarIcon'>
                            <Notifications />
                            <span className='topbarIconBadge'>1</span>
                        </div>
                    </div>
                    <div className='logoutLinks'>
                        <Link to= '/Profile'>
                            <img src="/assets/person/1.jpeg" alt="" className='topbarImg'/>
                        </Link>
                        <Link to='/Login' style={{textDecoration: 'none', color: 'white'}}>
                            <Logout className='logoutIcon'/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}