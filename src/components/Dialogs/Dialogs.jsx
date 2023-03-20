import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, dialogName: "Egor" },
        { id: 2, dialogName: "Anton" },
        { id: 3, dialogName: "Kirill" },
        { id: 4, dialogName: "Olga" },
        { id: 5, dialogName: "Ruslan" },
        { id: 6, dialogName: "Aleksey" },
        { id: 7, dialogName: "Kostya" },
    ];

    let messagesData = [
        {id: 1, textMessage: "Hello! Are you hear me??"},
        {id: 2, textMessage: "Hi! Are you here?"},
        {id: 3, textMessage: "Okay.. you ignored me.."},
        {id: 4, textMessage: "I all understand.. bye.."},
        {id: 5, textMessage: "Fuck me in my ass"},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogName={dialogsData[0].dialogName} id={dialogsData[0].id} />
                <DialogItem dialogName={dialogsData[1].dialogName} id={dialogsData[1].id} />
                <DialogItem dialogName={dialogsData[2].dialogName} id={dialogsData[2].id} />
                <DialogItem dialogName={dialogsData[3].dialogName} id={dialogsData[3].id} />
                <DialogItem dialogName={dialogsData[4].dialogName} id={dialogsData[4].id} />
                <DialogItem dialogName={dialogsData[5].dialogName} id={dialogsData[5].id} />
                <DialogItem dialogName={dialogsData[6].dialogName} id={dialogsData[6].id} />
            </div>
            <div className={s.messages}>
                <Message textMessage={messagesData[0].textMessage}/>
                <Message textMessage={messagesData[1].textMessage}/>
                <Message textMessage={messagesData[2].textMessage}/>
                <Message textMessage={messagesData[3].textMessage}/>
                <Message textMessage={messagesData[4].textMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;