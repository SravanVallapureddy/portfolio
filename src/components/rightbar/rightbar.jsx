import './rightbar.css';
import {Users} from '../../dummyData.js'
import Online from '../online/online.jsx';
// import Profile from '../../pages/profile/profile.jsx';


export default function Rightbar(){

    const HomeRightbar = () => {
        return(
            <>
                <div className='birthdayContainer'>
                        <img 
                            src="/assets/gift.png" 
                            alt="" 
                            className='rightbarImg'
                        />
                        <span className='birthdayText'>
                            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                        </span>
                </div>
                <img src="/assets/ad.png" alt="" className='rightbarAd'/>
                <h3 className='rightbarTitle'>Online Friends</h3>
                <ul className='rightbarFriendList'>
                    {Users.map(u => 
                        <Online key={u.id} user={u}/>
                    )}
                </ul>
            </>
        )
    }

    

    return(
        <>  
            <div className='rightBar'>
                <HomeRightbar />
            </div>
        </>
    )
}