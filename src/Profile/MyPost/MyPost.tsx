import React from "react";
import s from './MePost.module.css';
import Post1 from "./Post/Post1";

const MyPost = () => {
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
                <Post1 message='How are you?'/>
                <Post1 message='It`s my first post'/>
            </div>
        </div>
    )
}
export default MyPost;