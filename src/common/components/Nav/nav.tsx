import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}  >
                <NavLink to="/profile" className={({ isActive }) => (isActive ? s.active: '')}>Profile</NavLink>
            </div>
            <div className={`${s.item} `} >
                <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.active: '')}>Messages</NavLink>
            </div>
            <div className={`${s.item} `}>
                <NavLink to='/news' className={({ isActive }) => (isActive ? s.active: '')}>News</NavLink>
            </div>
            <div className={`${s.item} `}>
                <NavLink to="/music" className={({ isActive }) => (isActive ? s.active: '')} >Music</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? s.active: '')}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" className={({ isActive }) => (isActive ? s.active: '')}>Users</NavLink>
            </div>
        </nav>
    ) }
export default Nav;