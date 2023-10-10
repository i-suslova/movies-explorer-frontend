import React from 'react'

import './AboutMe.css';
import AboutMePhoto from '../../images/AboutMePhoto .png';

const AboutMe = () => {
  return (
    <section className='about-me' id='about-me'>
      <div className='app__wrapper '>
        <h2 className='app__title'>Студент</h2>

        <div className='app__line-stroke-black' />
        <div className='about-me__blok-info'>
          <div className='about-me__info'>
            <h3 className='about-me__subtitle'>Виталий</h3>
            <span className='about-me__job'>Фронтенд-разработчик, 30 лет</span>
            <p className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className='about-me__link' href='https://github.com/i-suslova' target='_blank' rel='noreferrer'>Github</a>
          </div>

          <img
            className='about-me__photo'
            src={AboutMePhoto}
            alt='фотография студента'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe


