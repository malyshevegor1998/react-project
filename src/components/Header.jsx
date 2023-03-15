import picture from './../pict/FC_Orenburg.png'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <img src={picture} alt="" />
        </header>
    );
}

export default Header;