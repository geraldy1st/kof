import React from 'react';
import './navbar.styles.css';
import { Link } from 'react-router-dom';

import logo from '../../images/kof-xiv.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <div className="logo">
              <Link to="/kof">
                <img src={logo} alt="" />
              </Link>
            </div>
          </li>
          <li>
            <Link to="/kof">
              <i className="fas fa-angle-right"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/kof/characters">
              <i className="fas fa-angle-right"></i> Characters
            </Link>
          </li>
          <li>
            <Link to="/videos">
              <i className="fas fa-angle-right"></i> Videos
            </Link>
          </li>
          <li>
            <Link to="gallery">
              <i className="fas fa-angle-right"></i> Gallery
            </Link>
          </li>
          <li>
            <Link to="About">
              <i className="fas fa-angle-right"></i> About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
