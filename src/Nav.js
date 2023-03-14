import { Link } from "react-router-dom";
import logo from "./images/logo.png"
import "./styles/navigation.css"

export const Nav = () => {
    return(
        <nav>
            <div><Link to="/"><p>Home</p></Link></div>
            <div><Link to="/about"><p>About us</p></Link></div>
            <div className="logo"><Link to = "/" ><img alt="logo" width="20px" src={logo}></img></Link></div>
            <div><Link to="/find-us"><p>Find us</p></Link></div>
            <div><Link to="/reserve"><p>Book a table</p></Link></div>
        </nav>
    );
}