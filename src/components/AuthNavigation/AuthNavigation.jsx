import React from 'react'
import { useNavigate } from 'react-router-dom';

import './AuthNavigation.css';

const AuthNavigation = () => {

  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/signup');
  };
  const handleLoginClick = () => {
    navigate('/signin');
  };

  return (
    <nav className='auth-navigation'>
      <ul className='auth-navigation__list'>
        <li className='auth-navigation__wrapper-register' onClick={handleRegisterClick}>
          <div className='auth-navigation__item'>
            Регистрация
          </div>
        </li>
        <li className='auth-navigation__wrapper-login' onClick={handleLoginClick}>
          <div className='auth-navigation__item'>
            Войти
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavigation




