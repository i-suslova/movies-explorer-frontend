import React from 'react'
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <main>
      <section className='not-found-page'>

        <div className='not-found-page__wrapper'>

          <h1 className='not-found-page__title'>404</h1>
          <span className='not-found-page__subtitle'>Страница не найдена</span>

          <Link className='not-found-page__link hover' to='/'>
            Назад
          </Link>

        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
