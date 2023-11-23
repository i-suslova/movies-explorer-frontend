import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import './NotFoundPage.css';

const NotFoundPage = ({ loggedIn }) => {

  const navigate = useNavigate();
  const path = useLocation().pathname;

  const handleGoBack = () => {
    if (loggedIn) {
      navigate(-1);
    } else {
      navigate('/signin');
    }
  };

  return (
    <main>
      <section className='not-found-page'>

        <div className='not-found-page__wrapper'>

          <h1 className='not-found-page__title'>404</h1>
          <span className='not-found-page__subtitle'>Страница не найдена</span>

          <Link
            className='not-found-page__link hover'
            onClick={handleGoBack}
          >
            Назад
          </Link>

        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
