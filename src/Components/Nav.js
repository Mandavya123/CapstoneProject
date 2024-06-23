import {Link} from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <nav>
            <ul id='navigator'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/Reservation">Reservations</Link></li>
                <li><Link to="/Orderonline">Order Online</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;