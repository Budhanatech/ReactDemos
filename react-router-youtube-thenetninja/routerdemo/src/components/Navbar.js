import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) => {

    // programatic redirec
    // props.history.push('/about');
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
            </div>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);