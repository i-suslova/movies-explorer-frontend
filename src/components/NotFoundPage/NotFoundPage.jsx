import React from 'react'
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <section className='not-found-page'>

      <div className='not-found-page__wrapper'>

        <h2 className='not-found-page__title'>404</h2>
        <span className='not-found-page__subtitle'>Страница не найдена</span>

        <Link className='not-found-page__link hover' to='/'>
          Назад
        </Link>

      </div>

    </section>
  )
}

export default NotFoundPage
