import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

<<<<<<< HEAD
const Header = (props) => {
  const { loggedIn } = props;
=======
const Header = ({ loggedIn }) => {
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c

  const path = useLocation().pathname;
  const isMain = path === '/';

  return (
    <header className={`header ${isMain ? 'header_color' : ''}`}>
      <Link className='header__logo hover' to='/'>
        <img src={logo} alt='логотип сайта' />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  )
};

export default Header;


