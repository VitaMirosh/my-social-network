import React from 'react';
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}
