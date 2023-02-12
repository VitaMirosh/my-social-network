import React from "react";
import s from './MePost.module.css';
import { ProfilePageType} from "../../Redux/State";
import Post1 from "./Post/Post1";



const MyPost = (props:ProfilePageType) => {

    let postsElement = props.posts.map(p => <Post1 message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postBlock}>
            <h3>My posts </h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>


            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPost;