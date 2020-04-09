import React from 'react';
import './navbar.styles.css';
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
              <img src={logo} alt="" />
            </div>
          </li>
          <li>
            <i class="fas fa-angle-right"></i> Video
          </li>
          <li>
            <i class="fas fa-angle-right"></i> KOF's Art
          </li>
          <li>
            <i class="fas fa-angle-right"></i> About
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
