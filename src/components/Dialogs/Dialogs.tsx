import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

// type PropsType = {
//     name: string,
//     id: string,
//     message: string,
// }
const DialogItem = (props:any) => {

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
const Message = (props:any) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                < DialogItem name="Vita" id="1"/>
                < DialogItem name="Inna" id="2"/>
                < DialogItem name="Olha" id="3"/>
                < DialogItem name="Polina" id="4"/>
                < DialogItem name="Rosa" id="5/"/>

            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you?"}/>
                <Message message={"Let's go with us!"}/>
            </div>
        </div>
    )
}
export default Dialogs