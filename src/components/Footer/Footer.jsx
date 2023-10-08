import React from 'react'
import './Footer.css';

const Footer = () => {
  const todaytYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className='footer__wrapper'>
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="app__line-stroke-grey" />
        <div className='footer__block'>
          <div className="footer__copyright">© {todaytYear}</div>
          <ul className='footer__list'>
            <li className='footer__item hover' >
              <a className='footer__link' target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/">
                Яндекс.Практикум</a> </li>
            <li className='footer__item hover'>
              <a className='footer__link' target="_blank" rel="noreferrer" href="https://github.com/">
                Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

