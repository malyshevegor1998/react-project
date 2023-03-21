import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" alt="" />
            <NavLink to={`/dialogs/${props.id}`}>{props.dialogName}</NavLink>
        </div>
    );
}

export default DialogItem;