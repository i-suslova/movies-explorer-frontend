import React from 'react';
import { Link } from 'react-router-dom';

import './BasicForm.css';

import logo from '../../images/logo.svg';
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

  return (
    <form
      action='#'
      method='post'
      className='basic-form'
      name='basic-form-form'
      onSubmit={handleFormSubmit}
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
