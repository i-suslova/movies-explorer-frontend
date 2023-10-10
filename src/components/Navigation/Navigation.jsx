import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import './Navigation.css'
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import logoProfileWhite from '../../images/profileWhite.svg';
import logoProfileBlack from '../../images/profileBlack.svg';

const Navigation = ({ loggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = useLocation().pathname;
  const isMain = path === '/';
  const [logoType, setLogoType] = useState(logoProfileBlack);
  // состояние для отслеживания открытия/закрытия бургер-меню
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  // состояние для отслеживания активного пункта навигации
  const [activeNavItem, setActiveNavItem] = useState('');

  // устанавливаем активный пункт в зависимости от текущего пути
  React.useEffect(() => {

    if (location.pathname === '/movies') {

      setActiveNavItem('Фильмы');

    } else if (location.pathname === '/saved-movies') {
      setActiveNavItem('Сохранённые фильмы');

    }
    else {
      setActiveNavItem('');
    }

    if (location.pathname === '/') {
      setLogoType(logoProfileWhite);
    } else {
      setLogoType(logoProfileBlack);
    }

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

  return (
    <nav className='navigation'>

      {!loggedIn ? (
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

            <Link className='navigation__link hover' to='/profile'>
              <img src={logoType} alt='вход в аккаунт' />
            </Link>

            <div className={`burger-button hover ${isMain ? 'burger-button-white' : 'burger-button-black '}`}
              onClick={handleBurgerButtonClick}></div>

          </div>
          {isBurgerMenuOpen && <BurgerMenu />}
        </>
      ) : (
        <AuthNavigation />
      )}

    </nav>
  )
};

export default Navigation;

