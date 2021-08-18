import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink} from "react-router-dom";

function Header() {
        return (
            <Nav className="nav nav-pills flex-column flex-lg-row px-4" class="nav" style={{fontSize: 20, fontStyle:"bold"}}>
                <NavLink className="nav px-4" exact to="/">Home</NavLink>
                <NavLink className="nav px-4" to="/portfolio">Projects</NavLink>
                <NavLink className="nav px-4" to="/contact">Contact Me</NavLink>
                <NavLink className="nav px-4" to="/resume">Resume</NavLink>
            </Nav>
        );
    }
export default Header;
