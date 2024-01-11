import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../model/profileReducer";
import th from '../../../../accets/image/Users/th.jpeg'

type ProfileTypeProps = {
    profile: ProfileType | null
}
export const ProfileInfo = (props: ProfileTypeProps) => {
    // if (!props.profile?.photo) {
    //     return <Preloader/>
    // }
    return (
        <div className={s.content}>
            <div>
                <img src={props.profile?.photo ? props.profile.photo.large : th} alt={''}/>

            </div>
            <div className={s.descriptionBlock}>
                ava+discription
            </div>
        </div>
    )
}