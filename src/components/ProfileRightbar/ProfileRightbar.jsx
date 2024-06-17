import './ProfileRightbar.css';
import {Users} from '../../dummyData';
import UserFriend from '../userfriend/userfriend';

export default function ProfileRightbar(){
    return(
        <>
            <div className='rightBar'>
                    <h4 className='RightbarTitle'>User information</h4>
                    <div className='RightbarInfo'>
                        <div className='RightbarInfoItem'>
                            <span className='RightbarInfoKey'>City:</span>
                            <span className='RightbarInfoValue'>New York</span>
                        </div>
                        <div className='RightbarInfoItem'>
                            <span className='RightbarInfoKey'>From:</span>
                            <span className='RightbarInfoValue'>Madrid</span>
                        </div>
                        <div className='RightbarInfoItem'>
                            <span className='RightbarInfoKey'>Relationship:</span>
                            <span className='RightbarInfoValue'>Single</span>
                        </div>
                    </div>
                    <h4 className='RightbarTitle'>User friends</h4>
                    <div className='RightbarFollowings'>
                        {Users.map(u => {
                            return <UserFriend key={u.id} user={u}/>
                        })}
                        {/* <div className='RightbarFollowing'>
                            <img src='assets/person/9.jpeg' alt="" className='RightbarFollowingImg'/>
                            <span className='RightbarFollowingName'>John Carter</span>
                        </div>
                        <div className='RightbarFollowing'>
                            <img src='assets/person/10.jpeg' alt="" className='RightbarFollowingImg'/>
                            <span className='RightbarFollowingName'>John Carter</span>
                        </div>
                        <div className='RightbarFollowing'>
                            <img src='assets/person/3.jpeg' alt="" className='RightbarFollowingImg'/>
                            <span className='RightbarFollowingName'>John Carter</span>
                        </div>
                        <div className='RightbarFollowing'>
                            <img src='assets/person/4.jpeg' alt="" className='RightbarFollowingImg'/>
                            <span className='RightbarFollowingName'>John Carter</span>
                        </div>
                        <div className='RightbarFollowing'>
                            <img src='assets/person/5.jpeg' alt="" className='RightbarFollowingImg'/>
                            <span className='RightbarFollowingName'>John Carter</span>
                        </div>
                        <div className='RightbarFollowing'>
                            <img src='assets/person/6.jpeg' alt="" className='RightbarFollowingImg'/>
                            <span className='RightbarFollowingName'>John Carter</span>
                        </div>
                        <div className='RightbarFollowing'>
                            <img src='assets/person/7.jpeg' alt="" className='RightbarFollowingImg'/>
                            <span className='RightbarFollowingName'>John Carter</span>
                        </div>
                        <div className='RightbarFollowing'>
                            <img src='assets/person/8.jpeg' alt="" className='RightbarFollowingImg'/>
                            <span className='RightbarFollowingName'>John Carter</span>
                        </div> */}
                    </div>
                    </div>
        </>
    )
}