import React from "react";
//import {useLocation, useHistory} from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="w-100 mt-auto text-dark p-4">
        <div>className="container text-center"</div>
            <a href="mailto:stephedavis12@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa fa-envelope" id='emailAnchor'></i> </a>

                <FaEnvelope size="2em" color="ffffff"/>
          <a href="https://github.com/whatawhat" target="_blank" rel="noreferrer">
          <i className="fa fa-github" id='githubAnchor'></i> </a>

            <FaGithub size="2em" color="#ffffff"/>
          <a href="www.linkedin.com/in/stephanie-davis-56780b3b" target="_blank" rel="noreferrer">
          <i className="fa fa-linkedin" id='linkedInAnchor'></i> </a>

            <FaLinkedin size="2em" color="#ffffff"/>
      </footer>
    );
  };

export default Footer;