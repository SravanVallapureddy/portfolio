import './userfriend.css'


export default function UserFriend({user}){
    return(
        <div className='RightbarFollowing'>
                <img src={user.profilePicture} alt="" className='RightbarFollowingImg'/>
                <span className='RightbarFollowingName'>{user.username}</span>
         </div>
    )
}