import './profile.css';
import Topbar from '../../components/topbar/topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';
// import Rightbar from '../../components/rightbar/rightbar';
import ProfileRightbar from '../../components/ProfileRightbar/ProfileRightbar';

export default function Profile(){
    return(
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img
                                src="assets/posts/3.jpeg" 
                                alt="" 
                                className='profileCoverImg'
                            />
                            <img
                                src="assets/person/1.jpeg" 
                                alt="" 
                                className='profileUserImg'
                            />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>Safak Kocaoglu</h4>
                            <span className='profileInfoDesc'>Hello my friends!</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <ProfileRightbar />
                    </div>
                </div>
            </div>
        </>
    )
}