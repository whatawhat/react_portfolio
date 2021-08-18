import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
//import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="w-100 mt-auto text-dark p-4">
        <div>className="container text-center"</div>
          <div id="email">
            <a href="mailto:stephedavis12@gmail.com">
              <FaEnvelope size="2em"/>
            </a>
          </div>

          <div id="github">
            <a href="https://github.com/whatawhat">
              <FaGithub size="2em"/>
            </a>
          </div>

          <div id="linkedIn">
            <a href="www.linkedin.com/in/stephanie-davis-56780b3b">
              <FaLinkedin size="2em"/>
            </a>
          </div>
      </footer>
    );
  };

export default Footer;