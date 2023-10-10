import React from 'react'

import './SearchForm.css';
import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search'>
      <form className='search__form'>
        <input
          type='text'
          placeholder='Фильм'
          className='search__input' />
        <img className='search__button hover' src={find} alt='поиск' />
      </form>

      <FilterCheckbox />

      <div className='search__line-stroke' />
    </section>
  )
}

export default SearchForm
