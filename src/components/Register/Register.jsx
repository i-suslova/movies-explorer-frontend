<<<<<<< HEAD
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
=======
import './Register.css';

import BasicForm from '../BasicForm/BasicForm';
import { useValidation } from '../../utils/validation';

const Register = () => {
  const {
    formData,
    errors,
    errorMessage,
    handleChange,
    // handleSubmit
  } = useValidation({ name: '', email: '', password: '' });
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c

  return (
    <main>
      <BasicForm
        title={`Добро пожаловать!`}
        buttonText={`Зарегистрироваться`}
        link={`/signin`}
        text={`Уже зарегистрированы?`}
        textLink={`Войти`}
<<<<<<< HEAD
        onSubmit={handleRegisterSubmit}
        isValidFormBtn={isValidForm}
        errorMessage={errorMessage}
        isSuccessResponse={isSuccessResponse}
        setIsSuccessResponse={setIsSuccessResponse}
      >
=======
      // onSubmit={handleSubmit}
      >

>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
        <section className='basic-form__form' >

          <label className='basic-form__label'>Имя</label>
          <input
            className='basic-form__input '
            type='text'
            id='name'
            name='name'
<<<<<<< HEAD
            required
            placeholder='Ваше имя'
            value={inputValues.name || ""}
            onChange={handleChange}
            onClick={handleInputClick}
            autoComplete="off"
=======
            minLength={2}
            required
            placeholder='Виталий'
            value={formData.name}
            onChange={handleChange}
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
          />
          <span className='basic-form__error'>{errors.name}</span>

          <label className='basic-form__label'>E-mail</label>
          <input
            className='basic-form__input '
            type='email'
            name='email'
            required
<<<<<<< HEAD
            placeholder="Ваш email"
            value={inputValues.email || ""}
            onChange={handleChange}
            onClick={handleInputClick}
            autoComplete="off"
=======
            placeholder='pochta@yandex.ru'
            value={formData.email}
            onChange={handleChange}
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
          />
          <span className='basic-form__error'>{errors.email}</span>

          <label className='basic-form__label'>Пароль</label>
          <input
            className='basic-form__input'
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

    </main >
  );
};

export default Register
<<<<<<< HEAD
=======

>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
