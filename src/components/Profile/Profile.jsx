<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

import './Profile.css';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from '../Header/Header';
import EditButton from '../EditButton/EditButton';
import useForm from '../../hooks/useForm';

const Profile = (props) => {

  const {
    loggedIn,
    onUpdateUser,
    onSignOut,
    errorMessage,
    setErrorMessage,
    isSuccessResponse,
    setIsSuccessResponse,
  } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const { inputValues, handleChange, errors, isValidForm } = useForm();
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
    setIsDataChanged(false);
=======
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
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
  };
  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

<<<<<<< HEAD
  useEffect(() => {
    setIsDataChanged(
      (inputValues.name !== currentUser.name && inputValues.email !== currentUser.email)
    );
  }, [inputValues, currentUser, setErrorMessage]);

  const handleProfileSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    onUpdateUser({ name: inputValues.name, email: inputValues.email });
  };

  useEffect(() => {
    return () => {
      setErrorMessage('');
    };
  }, [setErrorMessage]);

  return (
    <main>
      <Header loggedIn={loggedIn} />

      <section className='profile'>

        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
=======
  return (
    <main>
      <Header />

      <section className='profile'>

        <h1 className='profile__title'>Привет, Виталий!</h1>
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c

        <form className='profile__form' method='post' name='profile-form'>

          <label className='profile__label'> Имя
            <input
<<<<<<< HEAD
              className='profile__input'
              type='text'
              id='profile-name'
              name='name'
              placeholder={currentUser.name}
              required
              value={inputValues.name || ""}
              onChange={handleChange}
              onClick={() => {
                handleEditClick(true);
                setErrorMessage('');
              }}
              autoComplete="off"
            />
          </label>

=======
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
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
          <span className='profile__error'>{errors.name}</span>

          <label className='profile__label'> E-mail
            <input
<<<<<<< HEAD
              className='profile__input'
              type='email'
              name='email'
              id='input-link'
              placeholder={currentUser.email}
              required
              value={inputValues.email || ""}
              onChange={handleChange}
              onClick={() => {
                handleEditClick(true);
                setErrorMessage('');
              }}
              autoComplete="email"
            />
          </label>

=======
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
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
          <span className='profile__error'>{errors.email}</span>

        </form>

<<<<<<< HEAD
        {showEditForm || (isValidForm && isDataChanged) ? (

          <EditButton
            onClick={handleCancelEdit}
            buttonText='Сохранить'
            isValidFormBtn={isValidForm && isDataChanged}
            onSubmit={handleProfileSubmit}
            errorMessage={errorMessage}
            isSuccessResponse={isSuccessResponse}
            setIsSuccessResponse={setIsSuccessResponse}
          />
        ) : (

          <div className='profile__list'>

            <button
              className='profile__button-edit hover'
              type="button"
              aria-label="Редактирование данных профиля"
              onClick={() => {
                handleEditClick(true);
                setErrorMessage('');
              }}
            >
              Редактировать
            </button>

            <button
              className='profile__button-exit hover'
              type="button"
              aria-label="Выход из личного кабинета"
              onClick={() => onSignOut()}>
              Выйти из аккаунта
            </button>

=======
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
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
          </div>
        )}

      </section>
    </main>
  );
};

export default Profile;
<<<<<<< HEAD

=======
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
