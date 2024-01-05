import React from 'react';
import s from './header.module.css'
import {SetReducerType} from "../../reducers/auth-reducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../APP/store";
import {Auth} from "../../features/auth/ui/Auth";



const Header = () => {
    const data = useSelector<AppStateType, SetReducerType>(state => state.authReducer.data)

    console.log(data)

    return (
        <header className={s.header}>
            <img src="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"/>
            <div className={s.loginBlock}>
                {/*{data.isAuth ? data.login :*/}
                {/*    <NavLink to={'/login'} onClick={props.getSet}>Login</NavLink>*/}
                {/*}*/}
                <Auth/>
            </div>
        </header>
    )
}
export default Header;