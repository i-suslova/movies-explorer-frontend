import React from 'react'

import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className='portfolio__wrapper'>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__list'>
          <li className='portfolio__item hover'>
            <a className='portfolio__link' rel='noreferrer' href=' https://i-suslova.github.io/how-to-learn/' target='_blank'>
              Статичный сайт <span className='portfolio__span'>↗</span>
            </a>

          </li>
          <li className='portfolio__item hover' >
            <a className='portfolio__link' rel='noreferrer' href='https://i-suslova.github.io/russian-travel/' target='_blank'>
              Адаптивный сайт <span className='portfolio__span'>↗</span>
            </a>

          </li>
          <li className='portfolio__item hover'>
            <a className='portfolio__link' rel='noreferrer' href='https://github.com/i-suslova/react-mesto-api-full-gha/' target='_blank'>
              Одностраничное приложение <span className='portfolio__span'>↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
