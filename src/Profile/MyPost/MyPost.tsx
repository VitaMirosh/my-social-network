import React, {ChangeEvent} from "react";
import s from './MePost.module.css';
import {ActionType, addNewTextActionCreator, addPostActionCreator, PostsType} from "../../Redux/State";
import Post1 from "./Post/Post1";

type MyPostType = {
    posts: PostsType[]
    newPostText: string
    dispatch:(action:ActionType)=>void

}

const MyPost = (props: MyPostType) => {

    let postsElement = props.posts.map(p => <Post1 key={p.id} message={p.message} likesCount={p.likesCount}/>);


    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText));
       props.dispatch(addNewTextActionCreator(''))
    }


   const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(addNewTextActionCreator(e.currentTarget.value))
   }

    return (
        <div className={s.postBlock}>
            <h3>My posts </h3>
            <div>
                <textarea value={props.newPostText} onChange={newTextChangeHandler}></textarea>
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