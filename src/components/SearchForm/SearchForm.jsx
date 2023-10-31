import React, { useState, useEffect } from 'react';

import './SearchForm.css';

import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = (props) => {

  const { onSearch, onFilterChange, isChecked, searchResults, isMovieFound, setIsMovieFound, componentType, } = props;

  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue.trim() === '') {
      setErrorMessage('Нужно ввести ключевое слово.');

      if (setIsMovieFound && typeof setIsMovieFound === 'function') {
        setIsMovieFound(true);
      }
    } else {
      setErrorMessage('');

      const isDuplicate = searchResults && searchResults.some(
        (result) => result.searchText.toLowerCase()
          === searchValue.toLowerCase()
        // && result.isShortFilm === isShortFilm
        && result.componentType === componentType
      );

      if (isDuplicate) {
        setErrorMessage('Такой запрос уже был.');
        setSearchValue('');
      } else {
        onSearch(searchValue);
        setSearchValue('');
      }
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setErrorMessage('');
  };

  return (
    <section className='search'>
      <form className='search__form'
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
      {errorMessage && <span className='search__error'>{errorMessage}</span>}
      {isMovieFound !== undefined && !isMovieFound && (
        <span className='search__error'>Фильм не найден. Попробуйте другой запрос.</span>
      )}

      <FilterCheckbox onFilterChange={onFilterChange} isChecked={isChecked} />

      <div className='search__line-stroke' />
    </section>
  )
}

export default SearchForm

