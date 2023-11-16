<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import './Navigation.css'

=======
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import './Navigation.css'
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import logoProfileWhite from '../../images/profileWhite.svg';
import logoProfileBlack from '../../images/profileBlack.svg';

<<<<<<< HEAD
const Navigation = (props) => {
  const { loggedIn } = props;
=======
const Navigation = ({ loggedIn }) => {
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
  const navigate = useNavigate();
  const location = useLocation();
  const path = useLocation().pathname;
  const isMain = path === '/';
  const [logoType, setLogoType] = useState(logoProfileBlack);
  // состояние для отслеживания открытия/закрытия бургер-меню
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
<<<<<<< HEAD
  const [activeNavItem, setActiveNavItem] = useState('');

  useEffect(() => {
    if (location.pathname === '/movies') {
      setActiveNavItem('Фильмы');
    } else if (location.pathname === '/saved-movies') {
      setActiveNavItem('Сохранённые фильмы');
=======
  // состояние для отслеживания активного пункта навигации
  const [activeNavItem, setActiveNavItem] = useState('');

  // устанавливаем активный пункт в зависимости от текущего пути
  React.useEffect(() => {

    if (location.pathname === '/movies') {

      setActiveNavItem('Фильмы');

    } else if (location.pathname === '/saved-movies') {
      setActiveNavItem('Сохранённые фильмы');

>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
    }
    else {
      setActiveNavItem('');
    }
<<<<<<< HEAD
=======

>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
    if (location.pathname === '/') {
      setLogoType(logoProfileWhite);
    } else {
      setLogoType(logoProfileBlack);
    }
<<<<<<< HEAD
=======

>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
  }, [location.pathname]);

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  const handleMoviesClick = () => {
    navigate('/movies');
    handleNavItemClick('Фильмы');
  };

  const handleSavedMoviesClick = () => {
    navigate('/saved-movies');
    handleNavItemClick('Сохранённые фильмы');
  };

  const handleBurgerButtonClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

<<<<<<< HEAD
  const handleLogoClick = (event) => {
    event.preventDefault();
    if (location.pathname === '/profile') {
      navigate('/movies');
    } else {
      navigate('/profile');
    }
  };

  return (
    <nav className='navigation'>

      {loggedIn ? (
=======
  return (
    <nav className='navigation'>

      {!loggedIn ? (
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
        <>
          <div className='navigation__wrapper'>

            <ul className='navigation__wrapper-movies'>
              <li
                className={`navigation__movies hover ${activeNavItem === 'Фильмы' ? 'navigation__movies_active' : ''}`}
                onClick={handleMoviesClick}
              >
                Фильмы
              </li>
              <li
                className={`navigation__movies hover ${activeNavItem === 'Сохранённые фильмы' ? 'navigation__movies_active' : ''}`}
                onClick={handleSavedMoviesClick}
              >
                Сохранённые фильмы
              </li>
            </ul>

<<<<<<< HEAD
            <Link className='navigation__link hover' to='/profile' onClick={handleLogoClick}>
=======
            <Link className='navigation__link hover' to='/profile'>
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
              <img src={logoType} alt='вход в аккаунт' />
            </Link>

            <div className={`burger-button hover ${isMain ? 'burger-button-white' : 'burger-button-black '}`}
              onClick={handleBurgerButtonClick}></div>

          </div>
          {isBurgerMenuOpen && <BurgerMenu />}
        </>
      ) : (
        <AuthNavigation />
<<<<<<< HEAD
      )
      }

    </nav >
=======
      )}

    </nav>
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
  )
};

export default Navigation;

<<<<<<< HEAD

=======
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
