import React, { useState } from 'react';
import './FilterCheckbox.css';
import smalltumb from '../../images/smalltumb.svg';
import smalltumboff from '../../images/smalltumboff.svg';

const FilterCheckbox = (props) => {
  const { onFilterChange, } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
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
      </form>
    </section>
  )
}

export default FilterCheckbox


