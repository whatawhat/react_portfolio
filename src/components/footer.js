import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="w-100 mt-auto text-dark p-4">
        <div>className="container text-center"</div>
          <div id="email">
            <Link to="mailto:stephedavis12@gmail.com">
              <FaEnvelope size="2em"/>
            </Link>
          </div>
          <div>
            <a href="https://github.com/whatawhat"> <i class="fa fa-github fa-4x"></i></a>
          </div>
          <div id="linkedin">
            <i className="fab fa-linkedin"></i>
            <a href="www.linkedin.com/in/stephanie-davis-56780b3b" target="_blank" rel="noreferrer">LinkedIn</a>
            <FaLinkedin>LinkedIn</FaLinkedin>
          </div>
          <a href="https://github.com/whatawhat" target="_blank" rel="noreferrer">
          <i className="fa fa-github" id='githubAnchor'></i> </a>

            <FaGithub size="2em" color="#000000"/>
          <a href="www.linkedin.com/in/stephanie-davis-56780b3b" target="_blank" rel="noreferrer">
          <i className="fa fa-linkedin" id='linkedInAnchor'></i> </a>

            <FaLinkedin size="2em" color="#000000"/>
      </footer>
    );
  };

export default Footer;