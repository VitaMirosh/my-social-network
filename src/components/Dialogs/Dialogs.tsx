import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {addNewDialogsPage, DialogsType, MessageType, sendMessage} from "../../reducers/dialogReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../APP/store";


export const Dialogs = () => {
    const messages = useSelector<AppStateType, MessageType[]>(state => state.dialogPage.messages)
    const newMessageText = useSelector<AppStateType, string>(state => state.dialogPage.newMessageText)
    const dialogs = useSelector<AppStateType, DialogsType[]>(state => state.dialogPage.dialogs)
    const dispatch = useDispatch()

    const postText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(addNewDialogsPage(e.currentTarget.value))
    };

    let addText = () => {
        dispatch(sendMessage(newMessageText));
    }

    let messageElements = messages.map(m => <Messages message={m.message}/>)
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div><textarea value={newMessageText}
                           onChange={postText}
                           placeholder={'Enter your message'}></textarea></div>
            <div>
                <button onClick={addText}>Send</button>
            </div>

        </div>
    )
}
