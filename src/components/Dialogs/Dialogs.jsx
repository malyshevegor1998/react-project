import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogName='Egor' id='1'/>
                <DialogItem dialogName='Anton' id='2'/>
                <DialogItem dialogName='Kirill' id='3'/>
                <DialogItem dialogName='Olga' id='4'/>
                <DialogItem dialogName='Ruslan' id='5'/>
                <DialogItem dialogName='Aleksey' id='6'/>
                <DialogItem dialogName='Kostya' id='7'/>
            </div>
            <div className={s.messages}>
                <Message textMessage="Hello! Are you hear me??" />
                <Message textMessage="Hi! Are you here?" />
                <Message textMessage="Okay.. you ignored me.." />
                <Message textMessage="I all understand.. bye.." />
            </div>
        </div>
    );
}

export default Dialogs;