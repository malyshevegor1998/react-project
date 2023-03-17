import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink
                    className={navData => navData.isActive ? s.active : s.a}
                    to='/profile'>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={navData => navData.isActive ? s.active : s.a}
                    to='/dialogs'>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink 
                className={navData => navData.isActive ? s.active : s.a}
                to='/news'>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink 
                className={navData => navData.isActive ? s.active : s.a}
                to='/music'>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink 
                className={navData => navData.isActive ? s.active : s.a}
                to='/settings'>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;