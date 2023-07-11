import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <a href="/" className="site-name">Developer Library</a>
            <ul>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact</Link>
                </li>
                <li>
                    <Link to="/login" >Login</Link>
                </li>
            </ul>
           
        </nav>


    );

}

export default Navbar;