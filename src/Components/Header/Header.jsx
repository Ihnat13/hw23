import React from 'react';
import MenuItem from './MenuItem/MenuItem.jsx';
import './Header.css';

const Header = () => {
  return (
    <header >
      <nav className="header">
        <MenuItem text="Home" />
        <MenuItem text="About" />
        <MenuItem text="Contact" />
      </nav>
    </header>
  );
}

export default Header;
