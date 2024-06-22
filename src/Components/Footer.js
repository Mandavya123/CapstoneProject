import FooterLogo from './Media/FooterLogo.png';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <img src={FooterLogo} alt="FooterLogo" id='footerlogo'></img>
            <article id='navigation'>
                <h5>Navigation</h5>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </article>
            <article id='contact'>
                <h5>Contact</h5>
                <ul>
                    <li>Phone Number</li>
                    <li>Address</li>
                    <li>E-mail</li>
                </ul>
            </article>
        </footer>
    )
}

export default Footer;