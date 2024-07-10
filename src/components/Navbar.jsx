import React from "react";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Components.css"

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center p-3">
              <li className="nav-item">
                <Link to="/" id="logo" className="nav-link disabled" aria-disabled="true">StreamHuB</Link>
              </li>
            </ul>
        </>
    );
}

export default Navbar; 