import React from "react";
import s from './Message.module.css';

type MessagesType={
    message:string,
}

const Messages = (props:MessagesType) => {

    return <div className={s.dialog}>{props.message}</div>
}

export default Messages