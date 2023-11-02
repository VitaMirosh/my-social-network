import React from 'react';
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../APP/store";
import {ProfileType, setUsersProfileAC} from "../reducers/profileReducer";



export const Profile = () => {
    const profile = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile)
    const dispatch = useDispatch()

    const getProfile = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            setUsersProfile(response.data)

        })
    }
    let setUsersProfile = (profile: null) => {
        dispatch(setUsersProfileAC(profile))

    }
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile}/>
            <MyPost/>
        </div>
    )
}
