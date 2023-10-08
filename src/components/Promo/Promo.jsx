import React from 'react';

import './Promo.css';
import NavTab from '../NavTab/NavTab';
import promo from "../../images/promo.svg";

const Promo = () => {
  return (
    <>
      <section className='promo'>
        <div className='promo__wrapper'>
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <img className="promo__logo" src={promo} alt="логотип страницы «О проекте»" />
        </div>
      </section>
      <NavTab />
    </>
  )
}

export default Promo
