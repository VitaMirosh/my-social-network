import React from 'react';
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../Redux/State";

type ProfileType={
    profilePage:ProfilePageType;
}

export const Profile = (props:ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.profilePage.posts}/>
        </div>
    )
}
