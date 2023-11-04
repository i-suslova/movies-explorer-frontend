import React, { useState} from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = (props) => {

  const {
    onSearch,
    searchResults,
    isMovieFound,
    componentType,
    setIsMovieFound,
    isShortFilm,
    setIsShortFilm
  } = props;

  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleSearch = (e) => {
  e.preventDefault();

  if (searchValue.trim() === '') {
    setErrorMessage('Нужно ввести ключевое слово.');

    if (setIsMovieFound && typeof setIsMovieFound === 'function') {
      setIsMovieFound(true);
      setSearchValue('');
    }
  } else {
    setSearchValue('');
    setErrorMessage('');

    const isDuplicateWithoutCheckbox = searchResults.some(
      (result) =>
        result.searchText.toLowerCase() === searchValue.toLowerCase() &&
        !result.isShortFilm
    );

    const isDuplicateWithCheckbox = searchResults.some(
      (result) =>
        result.searchText.toLowerCase() === searchValue.toLowerCase() &&
        result.isShortFilm
    );

    if ((!isShortFilm && isDuplicateWithoutCheckbox) ||
    (isShortFilm && isDuplicateWithCheckbox)) {

      setErrorMessage('Такой запрос уже был.');
      return;
    }

    onSearch(searchValue, isShortFilm);
  }
};

  const handleFilterChange = () => {
    setIsShortFilm(!isShortFilm);
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

      {componentType === 'movies' && (
      //  <FilterCheckbox onFilterChange={handleFilterChange} isChecked={isChecked} />
      <FilterCheckbox onFilterChange={handleFilterChange} isChecked={isShortFilm} />
      )}

      {/* {componentType === 'savedMovies' && (
        <FilterCheckbox onFilterChange={handleFilterChange} isChecked={isChecked} />
      )} */}

      <div className='search__line-stroke' />
    </section>
  );
};

export default SearchForm;
