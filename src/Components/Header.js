import Logo from './Media/Logo.svg';

function Header() {
    return (
        <Header>
            <h1>Brand Logo</h1>
            <img src={Logo} alt='Logo'></img>
        </Header>
    )
}

export default Header;