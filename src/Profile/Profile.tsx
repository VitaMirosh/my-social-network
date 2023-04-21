import React from 'react';
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../Redux/State";

type ProfileType={
    profilePage:ProfilePageType
    addPost:(postMessage:string)=>void
    changeNewText:(newText:string)=>void
}

export const Profile = (props:ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}
                    changeNewText={props.changeNewText}
            />
        </div>
    )
}
