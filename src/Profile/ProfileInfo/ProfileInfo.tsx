import React from 'react';
import s from './ProfileInfo.module.css'
export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div >
                <img src= 'https://static9.depositphotos.com/1000276/1100/i/450/depositphotos_11008977-stock-photo-mountain-magic-landscape.jpg' alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                ava+discription
            </div>
        </div>
    ) }