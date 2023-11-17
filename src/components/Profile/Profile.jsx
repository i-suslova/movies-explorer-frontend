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
  };
  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

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

        <form className='profile__form' method='post' name='profile-form'>

          <label className='profile__label'> Имя
            <input
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

          <span className='profile__error'>{errors.name}</span>

          <label className='profile__label'> E-mail
            <input
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

          <span className='profile__error'>{errors.email}</span>

        </form>

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

          </div>
        )}

      </section>
    </main>
  );
};

export default Profile;
