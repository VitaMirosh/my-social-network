import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../APP/store";
import {SetReducerType, SetUsersAC} from "../../../reducers/auth-reducer";
import s from "../../../components/Header/header.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Auth = () => {
    const data = useSelector<AppStateType, SetReducerType>(state => state.authReducer.data)

    const dispatch = useDispatch()


    let getSet = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(SetUsersAC(response.data.data))
                }
            })
    }

    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {data.isAuth ? data.login :
                    <NavLink to={'/login'} onClick={getSet}>Login</NavLink>
                }

            </div>
        </header>

    );
};
