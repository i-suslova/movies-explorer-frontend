import React, { useState } from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = (props) => {
  const {
    onSearch,
    isMovieFound,
    componentType,
    setIsMovieFound,
    isShortFilm,
    setIsShortFilm,
    isShortFilmChecked,
    setIsShortFilmChecked,
  } = props;

  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // eslint-disable-next-line
  const [searchInputClicked, setSearchInputClicked] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue.trim() === '') {
      setErrorMessage('Нужно ввести ключевое слово.');
      if (setIsMovieFound && typeof setIsMovieFound === 'function') {
        setIsMovieFound(true);
        setSearchValue('');
      }
    } else {
      setErrorMessage('');

      onSearch(searchValue, isShortFilm);
    }
  };

  const handleFilterChangeMovies = () => {
    setIsShortFilm(!isShortFilm);
  };

  const handleFilterChangeSavedMovies = () => {
    setIsShortFilm(!isShortFilm);
    setIsShortFilmChecked(!isShortFilmChecked);
    onSearch(searchValue, !isShortFilm);
  };

  const handleSearchInputClick = () => {
    setSearchInputClicked(true);

    if (searchValue.trim() === '') {
      setErrorMessage('Нужно ввести ключевое слово.');
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setErrorMessage('');
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(e);
    }
  };

  return (
    <section className='search'>
      <form className='search__form' autoComplete="off">
        <input
          required
          type='text'
          name='search'
          placeholder='Фильм'
          className='search__input hover'
          value={searchValue}
          onChange={handleChange}
          onClick={handleSearchInputClick}
          onKeyDown={handleKey}
          autoComplete="off"
          title=""
        />
        <button
          className='search__button hover'
          type='submit'
          aria-label='поиск'
          onClick={handleSearch}
        />
      </form>

      {errorMessage && <span className='search__error'>{errorMessage}</span>}

      {isMovieFound !== undefined && !isMovieFound && errorMessage === '' && (
        <span className='search__error'>Фильм не найден. Попробуйте другой запрос.</span>
      )}

      {componentType === 'movies' && (

        <FilterCheckbox onFilterChange={handleFilterChangeMovies} isChecked={isShortFilm} />
      )}

      {componentType === 'savedMovies' && (
        <FilterCheckbox onFilterChange={handleFilterChangeSavedMovies} isChecked={isShortFilmChecked} />
      )}

      <div className='search__line-stroke' />
    </section>
  );
};

export default SearchForm;
