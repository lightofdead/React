import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messages.map(m => <Message text={m.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;