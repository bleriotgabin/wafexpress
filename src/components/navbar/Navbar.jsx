import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href="#home">Accueil</a></p>
    <p><a href="#whatwafexpress">Nos Services</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#possibility">Possibility</a></p>
    <p><a href="#footer">Contacts</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="wafexpress__navbar">

      <div className="wafexpress__navbar-links">

        <div className="wafexpress__navbar-links_logo">
          <img src={logo} alt="Logo de Wafexpress" />
        </div>

        <div className="wafexpress__navbar-links_container">
          <Menu />
        </div>

      </div>
      <div className="wafexpress__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>

      <div className="wafexpress__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="wafexpress__navbar-menu_container scale-up-center">
          <div className="wafexpress__navbar-menu_container-links">
            <Menu />
            <div className="wafexpress__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
