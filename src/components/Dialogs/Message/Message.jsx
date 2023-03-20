import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>{props.textMessage}</div>
    );
}

export default Message;