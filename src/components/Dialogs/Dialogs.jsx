import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messages.map(m => <Message text={m.message}/>)

    let createMessage = React.createRef();
    let sendMessage = () => {
        let text = createMessage.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea ref = {createMessage}></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;