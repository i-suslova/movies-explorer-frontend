import React from 'react';

import './NavTab.css';

const NavTab = () => {

  const links = [
    { item: "О проекте", id: 'about-project' },
    { item: "Технологии", id: 'techs' },
    { item: "Студент", id: 'about-me' },
  ];

  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__list'>
        {links.map(({ item, id }) => (
          <li className='nav-tab__item hover' key={item}>
            <a className='nav-tab__link' href={`#${id}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavTab;

