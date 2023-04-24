import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {
    console.log(props.messagesPage.newMessageText);
    let dialogElements = props.messagesPage.dialogsData.map((element) => <DialogItem id={element.id} dialogName={element.dialogName} />);
    let messageElements = props.messagesPage.messagesData.map((element) => <Message textMessage={element.textMessage} />);

    let messageElement = React.createRef();
    
    const sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const updateNewTextMessage = () => {
        let newTextMessage = messageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(newTextMessage));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={updateNewTextMessage} ref={messageElement} name="" id="" cols="30" rows="10" value={props.messagesPage.newMessageText}></textarea>
                <div>
                <p>{props.messagesPage.newMessageText}</p>
                <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;