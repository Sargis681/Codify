import React from 'react';
import './Menu.scss';
import { NavLink } from "react-router-dom";
import logo from "../../../src/Images/CodifyWorksLogo.png"

function Menu() {
    return (
        <nav className="Menu">
            <div className="container">
                <div className="logo">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="DeepDigital Logo"
                        />
                    </NavLink>
                </div>
                <ul className="list">
                    <li><NavLink to="/" exact activeClassName="active">HOME</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
                    <li><NavLink to="/services" activeClassName="active">SERVICES</NavLink></li>
                    <li><NavLink to="/Portfolio" activeClassName="active">Portfolio</NavLink></li>
                    <li><NavLink to="/pages" activeClassName="active">PAGES</NavLink></li>
                    <li><NavLink to="/blog" activeClassName="active">BLOG</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">CONTACTS</NavLink></li>
                </ul>

                {/* Contact Number */}
                <h1 className="contact-number">1-800-123-4567</h1>
            </div>
        </nav>
    );
}

export default Menu;
