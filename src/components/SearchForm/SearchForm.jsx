import React, { useState } from 'react';

import './SearchForm.css';

import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {

  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue.trim() === '') {
      setError('Нужно ввести ключевое слово.');
    } else {
      setError('');
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setError('');
  };

  return (
    <section className='search'>
      <form className='search__form'
        // onSubmit={handleSearch}
      >
        <input
          required
          type='text'
          name='search'
          placeholder='Фильм'
          className='search__input hover'
          value={searchValue}
          onChange={handleChange}
          onClick={handleSearch}
        />

        <img
          className='search__button hover'
          type='submit'
          src={find}
          alt='поиск'
          onClick={handleSearch}
        />

      </form>

      {error && <span className='search__error'>{error}</span>}

      <FilterCheckbox />

      <div className='search__line-stroke' />
    </section>
  )
}

export default SearchForm
