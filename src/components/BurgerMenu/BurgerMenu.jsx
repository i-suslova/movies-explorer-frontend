import React, { useState } from 'react';

import './BurgerMenu.css';
import logoProfileBlack from "../../images/profileBlack.svg";

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
          <button type="button" className="burger-menu__close hover" onClick={closeMenu}></button>
          <ul className='burger-menu__list'>
            <li className='burger-menu__item'>
              <a href="/" >Главная</a>
            </li>
            <li className='burger-menu__item'>
              <a href="/movies" >Фильмы</a>
            </li>
            <li className='burger-menu__item'>
              <a href="/saved-movies" >Сохранённые фильмы</a>
            </li>
          </ul>
          <a href="/profile" className='burger-menu__link hover'>
            <img src={logoProfileBlack} alt="вход в аккаунт" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BurgerMenu;
