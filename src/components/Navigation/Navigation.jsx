import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './Navigation.css'
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import logoProfileWhite from "../../images/profileWhite.svg";
import logoProfileBlack from "../../images/profileBlack.svg";


const Navigation = ({ loggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = useLocation().pathname;
  const isMain = path === '/';
  const [logoType, setLogoType] = useState(logoProfileBlack);
  // состояние для отслеживания активного пункта навигации
  const [activeNavItem, setActiveNavItem] = useState('');

  // устанавливаем активный пункт в зависимости от текущего пути
  React.useEffect(() => {
    console.log('Location:', location.pathname);
    console.log('isMain:', isMain);
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
    navigate("/movies");
    handleNavItemClick('Фильмы');
  };

  const handleSavedMoviesClick = () => {
    navigate("/saved-movies");
    handleNavItemClick('Сохранённые фильмы');
  };

  const handleProfileClick = () => {
    navigate("/profile");
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

            <img
              className="navigation__logo hover"
              src={logoType}
              alt="вход в аккаунт"
              onClick={handleProfileClick}
            />

            <div className={`burger-button hover ${isMain ? 'burger-button-white' : 'burger-button-black '}`}></div>

          </div>
        </>
      ) : (
        <AuthNavigation />
      )}

    </nav>
  )
};

export default Navigation;

