import { Link } from "react-router-dom";
import logo from "./images/logo.png"
import "./styles/navigation.css"
import { useState } from "react";

export const Nav = () => {
    const [burgerclass,setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class,setMenuClass] = useState("menu");
    const [isMenuClicked, setMenuClicked] = useState(false);

    const updateMenu = ()=>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setMenuClicked(!isMenuClicked);
    }
    const linkClicked = () =>{
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
        setMenuClicked(!isMenuClicked);
    }
    return(
        <>
        <nav className="desktop_nav">
            <div><Link to="/"><p>Home</p></Link></div>
            <div><Link to="/about"><p>About us</p></Link></div>
            <div className="logo"><Link to = "/" ><img alt="logo" width="20px" src={logo}></img></Link></div>
            <div><Link to="/find-us"><p>Find us</p></Link></div>
            <div><Link to="/reserve"><p>Book a table</p></Link></div>
        </nav>
        <nav>
            <header className="portrait_nav">
                <div className="logo portrait_orient"><Link to = "/" ><img alt="logo" width="20px" src={logo}></img></Link></div>
                <div className="burger-menu" onClick={updateMenu}>
                            <div className={burgerclass}></div>
                            <div className={burgerclass}></div>
                            <div className={burgerclass}></div>
                </div>
            </header>
            <div className={menu_class}>
                <ul className="menu_container">
                    <li><Link to="/" onClick={linkClicked}>Home</Link></li>
                    <li><Link to="/about" onClick={linkClicked}>About us</Link></li>
                    <li><Link to="/find-us" onClick={linkClicked}>Find us</Link></li>
                    <li><Link to="/reserve" onClick={linkClicked}>Book a table</Link></li>
                </ul>
            </div>
        </nav>
        </>
    );
}