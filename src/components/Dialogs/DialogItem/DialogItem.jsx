import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
            <div className={`${s.dialog} ${s.active}`}>
                <NavLink to={`/dialogs/${props.id}`}>{props.dialogName}</NavLink>
            </div>
    );
}

export default DialogItem;