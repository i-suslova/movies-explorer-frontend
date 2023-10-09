import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

const Header = ({ loggedIn }) => {

  const path = useLocation().pathname;
  const isMain = path === '/';

  return (
    <header className={`header ${isMain ? 'header_color' : ''}`}>
      <Link className="basic-form__logo hover" to="/">
        <img src={logo} alt="логотип сайта" />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  )
};

export default Header;


