import React from 'react'

import './Profile.css';
import Header from '../Header/Header';

const Profile = () => {
  return (
    <>
      <Header />
      <section className="profile">

        <h1 className="profile__title">Привет, Виталий!</h1>


        <form class="profile__form" method="post" name="profile-form">

          <label class="profile__label"> Имя
            <input class="profile__input" id="profile-name" name="name" placeholder="Имя" minlength="2" maxlength="30" required="" />
          </label>

          <div className="app__line-stroke-grey" />

          <label class="profile__label"> E-mail
            <input type='email'
              name='email'
              class="profile__input" id="input-link" placeholder="E-mail" required="" />

          </label>

        </form>

        <ul className='profile__list'>
          <li> <button
            type="button"
            className="profile__button-edit hover"
          > Редактировать</button>
          </li>
          <li><a href="#" className="profile__link hover">
            Выйти из аккаунта</a>
          </li>
        </ul>

      </section>

    </>
  )
}

export default Profile


