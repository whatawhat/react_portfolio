import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink} from "react-router-dom";

function Header() {
        return (
            <Nav className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </Nav>
        );
    }

export default Header;
