import React, {ChangeEvent} from "react";
import s from './MePost.module.css';
import Post1 from "./Post/Post1";
import {addNewTextActionCreator, addPostActionCreator, PostsType} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../APP/store";


const MyPost = () => {
    const posts = useSelector<AppStateType, PostsType[]>(state => state.profilePage.posts)
    const newPostText = useSelector<AppStateType, string>(state => state.profilePage.newPostText)
    const dispatch = useDispatch()

    let postsElement = posts.map(p => <Post1 key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(addNewTextActionCreator(e.currentTarget.value))
    }

    const addPost = () => {
        dispatch(addPostActionCreator(newPostText));
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts </h3>
            <div>
                <textarea value={newPostText} onChange={newTextChangeHandler}></textarea>
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