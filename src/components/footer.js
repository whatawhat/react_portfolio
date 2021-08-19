import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaTwitter } from 'react-icons/fa';
//import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="w-100 mt-auto text-dark p-4">
        <div class="container text-center">
          <div class="row m-5">
          <div id="phone" class="px-4">
            <a href="tel:+4123453146">
              <FaPhone size="2em"/>
            </a>
          </div>
          <div id="email" class="px-4">
            <a href="mailto:stephedavis12@gmail.com">
              <FaEnvelope size="2em"/>
            </a>
          </div>

          <div id="github" class="px-4">
            <a href="https://github.com/whatawhat">
              <FaGithub size="2em"/>
            </a>
          </div>

          <div id="linkedIn" class="px-4">
            <a href="www.linkedin.com/in/stephanie-davis-56780b3b">
              <FaLinkedin size="2em"/>
            </a>
          </div>
          <div id="Twitter" class="px-4">
            <a href="https://twitter.com/handavi">
              <FaTwitter size="2em"/>
            </a>
          </div>

          </div>
          </div>
      </footer>
    );
  };

export default Footer;