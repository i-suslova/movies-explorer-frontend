import React from 'react'

import './Login.css';
import BasicForm from "../BasicForm/BasicForm";

const Login = () => {
  return (

    <main>
      <BasicForm
        title={`Рады видеть!`}
        buttonText={`Войти`}
        link={`/signup`}
        text={`Ещё не зарегистрированы?`}
        textLink={`Регистрация`}
      >

        <section className="basic-form__form basic-form__form-login">
          <>
            <label className='basic-form__label'>E-mail</label>
            <input
              className="basic-form__input"
              type="email"
              name="email"
              required
            />
            <span className='basic-form__error'>222</span>

            <label className='basic-form__label'>Пароль</label>
            <input
              className="basic-form__input"
              type="password"
              name="password"
              required
            />
            <span className='basic-form__error'>333</span>
          </>
        </section>

      </BasicForm>
      
    </main>

  )
}

export default Login
