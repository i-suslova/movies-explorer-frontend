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

  return (
    <main>
      <BasicForm
        title={`Рады видеть!`}
        buttonText={`Войти`}
        link={`/signup`}
        text={`Ещё не зарегистрированы?`}
        textLink={`Регистрация`}
      // onSubmit={handleSubmit}
      >

        <section className='basic-form__form basic-form__form-login'>

          <label className='basic-form__label'>E-mail</label>
          <input
            className='basic-form__input basic-form__input-login'
            type='email'
            name='email'
            required
            value={formData.email}
            onChange={handleChange}
          />
          <span className='basic-form__error'>{errors.email}</span>

          <label className='basic-form__label'>Пароль</label>
          <input
            className='basic-form__input basic-form__input-login'
            type='password'
            name='password'
            required
            value={formData.password}
            onChange={handleChange}
          />
          <span className='basic-form__error'>{errors.password}</span>

        </section>

      </BasicForm>

    </main>
  );
};

export default Login
