import React, {createRef} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {MessagePageType} from "../../Redux/State";

type DialogsType= {
    messagePage:MessagePageType,
}


export const Dialogs = (props:DialogsType) => {
let postText = createRef<HTMLTextAreaElement>();
let addText = () =>{
    let newText= postText.current?.value
    alert(newText)
}

    let messageElements =props.messagePage.messages.map(m => <Messages message={m.message}/>)
    let dialogsElements = props.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div><textarea ref={postText}></textarea></div>
            <div><button onClick={addText}></button></div>

        </div>
    )
}
