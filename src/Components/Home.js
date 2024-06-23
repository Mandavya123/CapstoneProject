import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const reservepage = () => {
        navigate("/Reservation");
    }
    return (<>
        <article id='intro'>
            <h1>Little Lemon</h1>
            <h5>Chicago</h5>
            <p>Little lemon is a charming neighborhood bistro thatserves simple food and classic coktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </article>
        <button id='reservation' onClick={reservepage}>Reserve a Table</button>
    </>
    )
}

export default Home;