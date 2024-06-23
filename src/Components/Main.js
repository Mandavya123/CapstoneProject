import './Main.css';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Reservation from './Reservation';
import Home from './Home';
import Menu from './Menu';
import Orderonline from './Orderonline';
import Login from './Login';

function Main() {
    return (
        <main id='homemain'>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Menu' element={<Menu />}></Route>
                <Route path='/Reservation' element={<Reservation />}></Route>
                <Route path='/Orderonline' element={<Orderonline />}></Route>
                <Route path='/Login' element={<Login />}></Route>
            </Routes>
        </main>
    )
}

export default Main;