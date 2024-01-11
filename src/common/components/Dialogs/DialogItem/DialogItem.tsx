import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../../reducers/dialogReducer";


const DialogItem = (props:DialogsType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
export default DialogItem