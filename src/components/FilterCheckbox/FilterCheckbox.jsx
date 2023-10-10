import React, { useState } from 'react';
import './FilterCheckbox.css';
import smalltumb from '../../images/smalltumb.svg';
import smalltumboff from '../../images/smalltumboff.svg';

const FilterCheckbox = () => {

  // состояние для отслеживания текущего изображения checkbox
  const [isChecked, setIsChecked] = useState(false);
  // функция для обработки клика на checkbox
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (

    <section className='checkbox'>
      <input
        type='image'
        id='checkbox'
        className='checkbox__filter'
        src={isChecked ? smalltumboff : smalltumb}
        alt='выбор короткометражного фильма'
        onClick={handleCheckboxClick}
      />
      <label htmlFor='checkbox' className='checkbox__label'>Короткометражки</label>
    </section>
  )
}

export default FilterCheckbox


