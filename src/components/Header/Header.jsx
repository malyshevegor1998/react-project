import picture from '../../pict/FC_Orenburg.png'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={picture} alt="" />
        </header>
    );
}

export default Header;