import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';
import Header from '../Header/Header';
import EditButton from '../EditButton/EditButton';
import { useValidation } from '../../utils/validation';

const Profile = () => {
  const { formData, errors, handleChange } = useValidation({
    name: '',
    email: '',
  });
  const [showEditForm, setShowEditForm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleEditClick = () => {
    setShowEditForm(true);
  };
  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

  return (
    <main>
      <Header />

      <section className='profile'>

        <h1 className='profile__title'>Привет, Виталий!</h1>

        <form className='profile__form' method='post' name='profile-form'>

          <label className='profile__label'> Имя
            <input
              type='text'
              className='profile__input'
              id='profile-name'
              name='name'
              placeholder='Имя'
              minLength={2}
              maxlength='30'
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <span className='profile__error'>{errors.name}</span>

          <label className='profile__label'> E-mail
            <input
              type='email'
              className='profile__input'
              name='email'
              id='input-link'
              placeholder='E-mail'
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <span className='profile__error'>{errors.email}</span>

        </form>

        {showEditForm ? (
          <EditButton onClick={handleCancelEdit} buttonText='Сохранить' />
        ) : (

          <div className='profile__list'>
            <button className='profile__button-edit hover' onClick={handleEditClick}>
              Редактировать
            </button>
            <button className='profile__button-exit hover' onClick={handleLogout}>
              Выйти из аккаунта
            </button>
          </div>
        )}

      </section>
    </main>
  );
};

export default Profile;
