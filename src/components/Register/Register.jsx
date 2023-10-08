import React from 'react'

import './Register.css';
import BasicForm from "../BasicForm/BasicForm";

const Register = () => {
  return (
    <main>
      <BasicForm
        title={`Добро пожаловать!`}
        buttonText={`Зарегистрироваться`}
        link={`/signin`}
        text={`Уже зарегистрированы?`}
        textLink={`Войти`}
      >
        <>
          <section className="basic-form__form basic-form__form-register" >

            <label className='basic-form__label'>Имя</label>
            <input
              className="basic-form__input"
              type='text'
              id='name'
              name='name'
              minLength={2}
              required
            />
            <span className='basic-form__error'>111</span>

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

          </section>
        </>
      </BasicForm>
    </main>
  )
}

export default Register

