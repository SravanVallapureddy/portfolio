import './feed.css';
import Share from '../shares/share';
import Posts from '../posts/posts';
import {Post} from '../../dummyData.js';


export default function Feed(){
    return(
        <>
            <div className='feed'>
                <div className='feedWrapper'>
                    <Share />
                    {Post.map((p) =>(
                        <Posts key={p.id} posts={p}/>
                    ))}
                </div>
            </div>
        </>
    )
}