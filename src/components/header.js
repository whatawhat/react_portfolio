import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink} from "react-router-dom";

function Header() {
        return (
            <Nav className="nav nav-pills flex-column flex-lg-row px-4" style={{fontSize: 20}}>
                <NavLink className="nav px-4" exact to="/">Home</NavLink>
                <NavLink className="nav px-4" to="/projects">Projects</NavLink>
                <NavLink className="nav px-4" to="/contact">Contact Me</NavLink>
                <NavLink className="nav px-4" to="/resume">Resume</NavLink>
            </Nav>
        );
    }

export default Header;
