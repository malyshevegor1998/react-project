import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>Andrew</div>
                <div className={s.dialog}>Egor</div>
                <div className={s.dialog}>Sergey</div>
            </div>
            <div className={s.messages}>
                <div className={s.messages}>Hello?? Can you hear me?</div>
                <div className={s.messages}>Hi! Are you here&</div>
                <div className={s.messages}>Okay.. you ignored me..</div>
                <div className={s.messages}>I all understand.. bye..</div>
            </div>
        </div>
    );
}

export default Dialogs;