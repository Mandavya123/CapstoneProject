import Logo from './Media/Logo.svg';
import './Header.css';

function Header() {
    return (
        <header>
            <img src={Logo} alt='Logo' id='headerlogo'></img>
        </header>
    )
}

export default Header;