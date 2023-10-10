import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';
import Header from '../Header/Header';
import EditButton from '../EditButton/EditButton';

const Profile = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signup');
  };

  const handleEditClick = () => {
    setShowEditForm(true);
  };
  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

  return (
    <>
      <Header />

      <section className='profile'>

        <h1 className='profile__title'>Привет, Виталий!</h1>

        <form className='profile__form' method='post' name='profile-form'>

          <label className='profile__label'> Имя
            <input className='profile__input' id='profile-name' name='name' placeholder='Имя' minlength='2' maxlength='30' required='' />
          </label>

          <div className='app__line-stroke-grey' />

          <label className='profile__label'> E-mail
            <input type='email'
              name='email'
              className='profile__input' id='input-link' placeholder='E-mail' required='' />

          </label>

        </form>

        {showEditForm ? (
          <EditButton onClick={handleCancelEdit} buttonText='Сохранить' />
        ) : (

          <ul className='profile__list'>
            <li>
              <span className='profile__link-edit hover' onClick={handleEditClick}>
                Редактировать
              </span>
            </li>
            <li>
              <span className='profile__link-exit hover' onClick={handleLogout}>
                Выйти из аккаунта
              </span>
            </li>
          </ul>
        )}

      </section>
    </>
  );
};

export default Profile;
