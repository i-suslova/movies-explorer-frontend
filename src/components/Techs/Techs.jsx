import React from 'react'

import './Techs.css';

const Techs = () => {
  return (
    <section className='techs' id="techs">
      <div className='app__wrapper'>
        <h2 className='app__title' >Технологии</h2>
        <div className="app__line-stroke-black" />

        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className='techs__list'>
          <li className='techs__item'>
            <p className='techs__item-text'>HTML</p>
          </li>
          <li className='techs__item'>
            <p className='techs__item-text'>CSS</p>
          </li>
          <li className='techs__item'>
            <p className='techs__item-text'>JS</p>
          </li>
          <li className='techs__item'>
            <p className='techs__item-text'>React</p>
          </li>
          <li className='techs__item'>
            <p className='techs__item-text'>Git</p>
          </li>
          <li className='techs__item'>
            <p className='techs__item-text'>Express.js</p>
          </li>
          <li className='techs__item'>
            <p className='techs__item-text'>mongoDB</p>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Techs

