import FooterLogo from './Media/FooterLogo.png';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <img src={FooterLogo} alt="FooterLogo" id='footerlogo'></img>
            <article id='footernav'>
                <h5>Navigation</h5>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Reservation">Reservations</Link></li>
                    <li><Link to="/Orderonline">Order Online</Link></li>
                    <li><Link to="/Login">Login</Link></li>
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