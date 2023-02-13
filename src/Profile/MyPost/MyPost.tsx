import React, {createRef} from "react";
import s from './MePost.module.css';
import {ProfilePageType} from "../../Redux/State";
import Post1 from "./Post/Post1";


const MyPost = (props: ProfilePageType) => {

    let postsElement = props.posts.map(p => <Post1 message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts </h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>


            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPost;