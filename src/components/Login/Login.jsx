<<<<<<< HEAD
import React, { useEffect } from 'react';

import './Login.css';

import BasicForm from '../BasicForm/BasicForm';
import useForm from '../../hooks/useForm';

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
=======
import React from 'react'

import './Login.css';
import BasicForm from '../BasicForm/BasicForm';
import { useValidation } from '../../utils/validation';

const Login = () => {
  const {
    formData,
    errors,
    errorMessage,
    handleChange,
    // handleSubmit
  } = useValidation({ email: '', password: '' });
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c

  return (
    <main>
      <BasicForm
        title={`Рады видеть!`}
        buttonText={`Войти`}
        link={`/signup`}
        text={`Ещё не зарегистрированы?`}
        textLink={`Регистрация`}
<<<<<<< HEAD
        onSubmit={handleLoginSubmit}
        isValidFormBtn={isValidForm}
        errorMessage={errorMessage}
      >
=======
      // onSubmit={handleSubmit}
      >

>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
        <section className='basic-form__form basic-form__form-login'>

          <label className='basic-form__label'>E-mail</label>
          <input
            className='basic-form__input basic-form__input-login'
            type='email'
            name='email'
            required
<<<<<<< HEAD
            placeholder="Ваш email"
            value={inputValues.email || ""}
            onChange={handleChange}
            onClick={handleInputClick}
=======
            placeholder='pochta@yandex.ru'
            value={formData.email}
            onChange={handleChange}
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
          />
          <span className='basic-form__error'>{errors.email}</span>

          <label className='basic-form__label'>Пароль</label>
          <input
            className='basic-form__input basic-form__input-login'
            type='password'
            name='password'
            required
<<<<<<< HEAD
            placeholder='Ваш пароль'
            value={inputValues.password || ""}
            onChange={handleChange}
            onClick={handleInputClick}
            autoComplete="new-password"
=======
            placeholder='••••••••••••••'
            value={formData.password}
            onChange={handleChange}
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
          />
          <span className='basic-form__error'>{errors.password}</span>

        </section>

      </BasicForm>

    </main>
  );
};

export default Login
