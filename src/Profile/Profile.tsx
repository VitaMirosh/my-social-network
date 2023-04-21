import React from 'react';
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../Redux/State";

type ProfileType={
    profilePage:ProfilePageType
    dispatch:(action:ActionType)=>void
}

export const Profile = (props:ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}
            />
        </div>
    )
}
