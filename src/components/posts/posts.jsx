import './posts.css'
import {MoreVert} from '@mui/icons-material';
import { Users } from "../../dummyData.js";
import { useState } from 'react';

export default function Posts({posts}){

    const [like, setLike] = useState(posts.like)
    const [isLiked, SetIsLiked] = useState(false)

    const HandleClick = () =>{
        setLike(isLiked ? like-1 : like+1)
        SetIsLiked(!isLiked)
    }

    return(
        <>
            <div className="post">
                <div className='postWrapper'>
                    <div className='postTop'>
                        <div className='postTopLeft'>
                            <img 
                                src={Users.filter((u) =>u.id === posts.userId)[0].profilePicture} 
                                alt="" 
                                className='postProfileImg'
                            />
                            <span className='postUsername'>{Users.filter((u) =>u.id === posts.userId)[0].username}</span>
                            <span className='postDate'> {posts.date}</span>
                        </div>
                        <div className='postTopRight'>
                            <MoreVert />
                        </div>
                    </div>
                    <div className='postCenter'>
                        <span className='postText'>{posts.desc}</span>
                        <img className='postImg' src={posts?.photo} alt="" />
                    </div>
                    <div className='postBottom'>
                        <div className='postBottomLeft'>
                            <img className='likeIcon' src="/assets/like.png" onClick={HandleClick} alt="" />
                            <img className='likeIcon' src="/assets/heart.png" onClick={HandleClick} alt="" />
                            <span className='postLikeCounter'>{like} people like it</span>
                        </div>
                        <span className='postBottomRight'>{posts.comment} comments</span>
                    </div>
                </div>
            </div>
        </>
    )
}