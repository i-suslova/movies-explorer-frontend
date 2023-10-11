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
      <div className='auth-navigation__list'>
        <div className='auth-navigation__wrapper-register' onClick={handleRegisterClick}>
          <button className='auth-navigation__button hover'>
            Регистрация
          </button>
        </div>
        <div className='auth-navigation__wrapper-login hover' onClick={handleLoginClick}>
          <button className='auth-navigation__button'>
            Войти
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavigation




