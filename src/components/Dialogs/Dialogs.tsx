import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {
    ActionType,
    addNewDialogsPage,
    MessagePageType,
    sendMessage
} from "../../Redux/State";

type DialogsType = {
    messagePage: MessagePageType,
    dispatch: (action: ActionType) => void,

}


export const Dialogs = (props: DialogsType) => {

    const postText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(addNewDialogsPage(e.currentTarget.value))
    };

    let addText = () => {
        props.dispatch(sendMessage(props.messagePage.newMessageText));
        props.dispatch(addNewDialogsPage(''));

    }

    let messageElements = props.messagePage.messages.map(m => <Messages message={m.message}/>)
    let dialogsElements = props.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div><textarea value={props.messagePage.newMessageText}
                           onChange={postText}
                           placeholder={'Enter your message'}></textarea></div>
            <div>
                <button onClick={addText}>Send</button>
            </div>

        </div>
    )
}
