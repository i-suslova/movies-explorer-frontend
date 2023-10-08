import React from 'react'
import './AboutProject.css'



const AboutProject = () => {
  return (

    <section className='about-project' id="about-project">

      <div className='app__wrapper'>
        <h2 className='app__title'>О проекте</h2>

        <div className="app__line-stroke" />

        <div className='about-project__blocks'>
          <div className='about-project__block'>
            <h3 className="about-project__block-title">Дипломный проект включал 5 этапов</h3>
            <p className='about-project__block-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className='about-project__block'>
            <h3 className="about-project__block-title">На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__block-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about-project__table'>
          <div className='about-project__time'>
            <p className='about-project__cell about-project__time-backend'>1 неделя</p>
            <p className='about-project__cell about-project__time-frontend'>4 недели</p>
          </div>
          <div className='about-project__time'>
            <p className='about-project__cell about-project__text-backend'>Back-end</p>
            <p className='about-project__cell about-project__text-frontend'>Front-end</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default AboutProject


