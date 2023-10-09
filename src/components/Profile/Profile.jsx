import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Profile.css';
import Header from '../Header/Header';



const Profile = () => {

  const navigate = useNavigate();

  const handleLogout = () => {

    navigate('/');
  };

  return (
    <>
      <Header />

      <section className="profile">

        <h1 className="profile__title">Привет, Виталий!</h1>


        <form className="profile__form" method="post" name="profile-form">

          <label className="profile__label"> Имя
            <input className="profile__input" id="profile-name" name="name" placeholder="Имя" minlength="2" maxlength="30" required="" />
          </label>

          <div className="app__line-stroke-grey" />

          <label class="profile__label"> E-mail
            <input type='email'
              name='email'
              className="profile__input" id="input-link" placeholder="E-mail" required="" />

          </label>

        </form>

        <ul className='profile__list'>
          <li> <button
            type="submit"
            className="profile__button-edit hover"
          > Редактировать
            </button>
          </li>
        </ul>

        <ul className="profile__list">
          <li>
            <span className="profile__link hover" onClick={handleLogout}>
              Выйти из аккаунта
            </span>
          </li>
        </ul>

      </section>
    </>
  );
};

export default Profile;


