import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './BurgerMenu.css';
import logoProfileBlack from '../../images/profileBlack.svg';

const BurgerMenu = () => {
  //определяем, открыто ли бургер-меню
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const closeMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

return (
  <section className={`burger-menu ${isBurgerOpen ? 'burger-menu_opened' : ''}`}>
    <div className={`burger-menu__wrapper `}>
      <div className='burger-menu__container'>
        <button type='button' className='burger-menu__close hover' onClick={closeMenu}></button>
        <ul className='burger-menu__list'>
          <li className='burger-menu__item'>
            <NavLink to='/' className='burger-menu__link'  onClick={closeMenu}>
                Главная
              </NavLink>
          </li>
          <li className='burger-menu__item'>
          <NavLink to='/movies' className='burger-menu__link' onClick={closeMenu}>
                Фильмы
              </NavLink>
          </li>
          <li className='burger-menu__item'>
          <NavLink to='/saved-movies' className='burger-menu__link' onClick={closeMenu}>
                Сохранённые фильмы
              </NavLink>
          </li>
        </ul>
        <Link to='/profile' className='burger-menu__link hover' onClick={closeMenu}>
          <img src={logoProfileBlack} alt='вход в аккаунт' />
        </Link>
      </div>
    </div>
  </section>
);
};
export default BurgerMenu;
