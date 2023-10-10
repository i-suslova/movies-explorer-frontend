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

  return (
    <main>
      <BasicForm
        title={`Добро пожаловать!`}
        buttonText={`Зарегистрироваться`}
        link={`/signin`}
        text={`Уже зарегистрированы?`}
        textLink={`Войти`}
      // onSubmit={handleSubmit}
      >

        <section className='basic-form__form basic-form__form-register' >

          <label className='basic-form__label'>Имя</label>
          <input
            className='basic-form__input basic-form__input-register'
            type='text'
            id='name'
            name='name'
            minLength={2}
            required
            value={formData.name}
            onChange={handleChange}
          />
          <span className='basic-form__error'>{errors.name}</span>

          <label className='basic-form__label'>E-mail</label>
          <input
            className='basic-form__input basic-form__input-register'
            type='email'
            name='email'
            required
            value={formData.email}
            onChange={handleChange}
          />
          <span className='basic-form__error'>{errors.email}</span>

          <label className='basic-form__label'>Пароль</label>
          <input
            className='basic-form__input basic-form__input-register'
            type='password'
            name='password'
            required
            value={formData.password}
            onChange={handleChange}
          />
          <span className='basic-form__error'>{errors.password}</span>

        </section>

      </BasicForm>

    </main >
  );
};

export default Register

