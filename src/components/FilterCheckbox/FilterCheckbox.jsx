<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
import './FilterCheckbox.css';
import smalltumb from '../../images/smalltumb.svg';
import smalltumboff from '../../images/smalltumboff.svg';

<<<<<<< HEAD
const FilterCheckbox = (props) => {
  const { onFilterChange, isChecked } = props;

  const handleCheckboxClick = () => {

    onFilterChange(!isChecked);
  };
  return (
    <section className='checkbox'>
      <form className='checkbox__form'>
        <label className='checkbox__label'>
          <button
            type='button'
            className='checkbox__filter'
            onClick={handleCheckboxClick}
          >
            <img
              src={isChecked ? smalltumb : smalltumboff}
              alt='выбор короткометражного фильма'
            />
          </button>
          Короткометражки
        </label>
=======
const FilterCheckbox = () => {

  // состояние для отслеживания текущего изображения checkbox
  const [isChecked, setIsChecked] = useState(false);
  // функция для обработки клика на checkbox
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (

    <section className='checkbox'>
      <form className='checkbox__form'>
        <input
          type='image'
          id='checkbox'
          className='checkbox__filter'
          src={isChecked ? smalltumboff : smalltumb}
          alt='выбор короткометражного фильма'
          onClick={handleCheckboxClick}
        />
        <label htmlFor='checkbox' className='checkbox__label'>Короткометражки</label>
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
      </form>
    </section>
  )
}

<<<<<<< HEAD
export default FilterCheckbox;
=======
export default FilterCheckbox


>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
