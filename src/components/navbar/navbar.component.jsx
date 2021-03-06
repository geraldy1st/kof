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
            <a href="/kof/characters">
              <i className="fas fa-angle-right"></i> Characters
            </a>
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
      <a href="/kof">
        <div className="nav-logo">
          <img
            src="https://www.litlgeeks.com/wp-content/uploads/2019/10/KOFA-Logo.png"
            alt=""
          />
        </div>
      </a>
    </div>
  );
};

export default Navbar;
