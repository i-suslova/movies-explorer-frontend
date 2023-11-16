<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
import { Link } from 'react-router-dom';

import './BasicForm.css';

import logo from '../../images/logo.svg';
<<<<<<< HEAD
import iconConsent from "../../images/iconConsent.svg";

import InfoTooltip from '../InfoTooltip/InfoTooltip';

const BasicForm = (props) => {
  const {
    children,
    title,
    buttonText,
    text,
    textLink,
    link,
    onSubmit,
    isValidFormBtn,
    errorMessage,
    isSuccessResponse,
    setIsSuccessResponse,
  } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }
=======

const BasicForm = (props) => {
  const { children, title, buttonText, text, textLink, link, onSubmit } = props;
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c

  return (
    <form
      action='#'
      method='post'
      className='basic-form'
      name='basic-form-form'
<<<<<<< HEAD
      onSubmit={handleFormSubmit}
=======
      noValidate
      onSubmit={onSubmit}
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
    >
      <Link
        className='basic-form__logo hover'
        to='/'
      >
        <img
          src={logo}
          alt='логотип сайта'
        />
      </Link>

      <h1 className='basic-form__title'>{title}</h1>

      {children}

      <div className='basic-form__submit'>
<<<<<<< HEAD

        {isSuccessResponse ? (
          <InfoTooltip
            isOpen={true}
            onClose={setIsSuccessResponse}
            iconImage={iconConsent}
            popupMessage="Профиль успешно создан."
          />
        ) : (
          <span className='basic-form__main-error'>{errorMessage}</span>
        )}
        <button
          type='submit'
          aria-label="Сохранение данных профиля"

          className={`basic-form__button hover
           ${isValidFormBtn && !errorMessage ? '' : 'basic-form__button_disabled'}`}
          disabled={!isValidFormBtn || !!errorMessage}
        >
          {buttonText}
        </button>

=======
        <span className='basic-form__main-error'></span>
        <button
          type='submit'
          className='basic-form__button hover'>{buttonText}
        </button>
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
      </div>

      <div className='basic-form__wrapper'>
        <p className='basic-form__wrapper-text'>{text}</p>
        <Link to={link} className='basic-form__link hover'>
          {textLink}
        </Link>

      </div>
    </form>
  )
}

export default BasicForm
<<<<<<< HEAD
=======

>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
