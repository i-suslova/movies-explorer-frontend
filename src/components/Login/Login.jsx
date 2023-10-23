import React, { useState, useEffect } from 'react';

import './Login.css';

import BasicForm from '../BasicForm/BasicForm';
import useForm from '../../hooks/useForm';

// const Login = ({onLogin}) => {
const Login = (props) => {
  const { onLogin, errorMessage, setErrorMessage } = props;
  const { inputValues, handleChange, errors, isValidForm } = useForm();

  const handleLoginSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (!inputValues.email || !inputValues.password) {
      return;
    }
    onLogin(inputValues.email, inputValues.password);
  }

  const handleInputClick = () => {
    setErrorMessage('');
  };

  useEffect(() => {
    return () => {
      setErrorMessage('');
    };
  }, [setErrorMessage]);

  return (
    <main>
      <BasicForm
        title={`Рады видеть!`}
        buttonText={`Войти`}
        link={`/signup`}
        text={`Ещё не зарегистрированы?`}
        textLink={`Регистрация`}
        onSubmit={handleLoginSubmit}
        isValidFormBtn={isValidForm}
        errorMessage={errorMessage}
      >
        <section className='basic-form__form basic-form__form-login'>

          <label className='basic-form__label'>E-mail</label>
          <input
            className='basic-form__input basic-form__input-login'
            type='email'
            name='email'
            required
            placeholder="Ваш email"
            value={inputValues.email || ""}
            onChange={handleChange}
            onClick={handleInputClick}
            autoComplete="email"
          />
          <span className='basic-form__error'>{errors.email}</span>

          <label className='basic-form__label'>Пароль</label>
          <input
            className='basic-form__input basic-form__input-login'
            type='password'
            name='password'
            required
            placeholder='Ваш пароль'
            value={inputValues.password || ""}
            onChange={handleChange}
            onClick={handleInputClick}
            autoComplete="new-password"
          />
          <span className='basic-form__error'>{errors.password}</span>

        </section>

      </BasicForm>

    </main>
  );
};

export default Login
