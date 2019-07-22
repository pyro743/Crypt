import React from 'react';
import logo from './logo.png';
import './Header.css';
import {Link} from 'react-router-dom';
import Search from './Search';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={logo} alt="logo" className="Header-logo" />
      </Link>
      <Search />
    </div>
  );
}

export default Header;