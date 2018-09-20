import React from "react";
import {Link} from "react-router-dom";

const Header = () => (
    <header className="header">
        <nav>
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/langlib">The Project</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header;
