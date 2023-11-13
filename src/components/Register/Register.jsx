import React, { useEffect } from 'react';

import './Register.css';

import BasicForm from '../BasicForm/BasicForm';
import useForm from '../../hooks/useForm';


const Register = (props) => {
  const {
    loggedIn,
    onRegistration,
    errorMessage,
    setErrorMessage,
    isSuccessResponse,
    setIsSuccessResponse
  } = props;

  const { inputValues, handleChange, errors, isValidForm, resetForm } = useForm();

  const handleRegisterSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    onRegistration(inputValues.name, inputValues.email, inputValues.password);
  }

  const handleInputClick = () => {
    setErrorMessage('');
  };

  useEffect(() => {
    if (loggedIn) resetForm();
  }, [loggedIn, resetForm]);

  useEffect(() => {
    return () => {
      setErrorMessage('');
    };
  }, [setErrorMessage]);

  return (
    <main>
      <BasicForm
        title={`Добро пожаловать!`}
        buttonText={`Зарегистрироваться`}
        link={`/signin`}
        text={`Уже зарегистрированы?`}
        textLink={`Войти`}
        onSubmit={handleRegisterSubmit}
        isValidFormBtn={isValidForm}
        errorMessage={errorMessage}
        isSuccessResponse={isSuccessResponse}
        setIsSuccessResponse={setIsSuccessResponse}
      >
        <section className='basic-form__form' >

          <label className='basic-form__label'>Имя</label>
          <input
            className='basic-form__input '
            type='text'
            id='name'
            name='name'
            required
            placeholder='Ваше имя'
            value={inputValues.name || ""}
            onChange={handleChange}
            onClick={handleInputClick}
            autoComplete="off"
          />
          <span className='basic-form__error'>{errors.name}</span>

          <label className='basic-form__label'>E-mail</label>
          <input
            className='basic-form__input '
            type='email'
            name='email'
            required
            placeholder="Ваш email"
            value={inputValues.email || ""}
            onChange={handleChange}
            onClick={handleInputClick}
            autoComplete="off"
          />
          <span className='basic-form__error'>{errors.email}</span>

          <label className='basic-form__label'>Пароль</label>
          <input
            className='basic-form__input'
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

    </main >
  );
};

export default Register
