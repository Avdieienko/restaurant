import logo from "./images/logo.png"
import "./styles/footer.css"
import { Link } from "react-router-dom";


export const Footer = () => {
    return(
        <footer>
            <hr></hr>
            <div className="footer_wrapper">
                <div>
                    <Link to="/restaurant/">
                        <img alt="logo" src={logo}></img>
                    </Link>
                </div>
                <div className="footer_txt">
                    <h1>Navigation</h1>
                    <ul>
                        <li><Link to="/restaurant/">Home</Link></li>
                        <li><Link to="/restaurant/about">About us</Link></li>
                        <li><Link to="/restaurant/find-us">Find us</Link></li>
                        <li><Link to="/restaurant/reserve">Book a table</Link></li>
                    </ul>
                </div>
                <div className="footer_txt">
                    <h1>Get in touch</h1>
                    <ul>
                        <li><a href="mailto:avdieienko.d@gmail.com">avdieienko.d@gmail.com</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/avd.dima03/">Instagram</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/people/Dmytro-Avdieienko/100009028267852/">Facebook</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/avdima03">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <h2>Designed & Built by </h2><a rel="noopener noreferrer" target="_blank" className="signature" href="https://avdieienko.com">Dmytro Avdieienko</a>
        </footer>
    );
}