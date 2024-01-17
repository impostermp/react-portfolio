// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { VoidExpression } from 'typescript';

interface NavbarProps {
  loggedIn: boolean;
  openLoginModal: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ loggedIn,openLoginModal }) => {
  return (
    <nav className='menu'>
      <ul className='generic-info'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {loggedIn ? (
            <span>Log out</span>
          ) : (
            <button onClick={openLoginModal}>Log in</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
