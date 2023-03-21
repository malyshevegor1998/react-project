import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.dialogsData.map((element) => <DialogItem dialogName={element.dialogName} id={element.id} />);
    let messageElements = props.messagesData.map((element) => <Message textMessage={element.textMessage} />);

    let messageElement = React.createRef();
    const sendMessage = () => {
        let text = messageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea ref={messageElement} name="" id="" cols="30" rows="10"></textarea>
                <div>
                <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;