import React, { useState } from 'react';

import './SearchForm.css';

import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = (props) => {

  const { onSearch, onFilterChange, isChecked, searchResults } = props;

  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');
  const [duplicateError, setDuplicateError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue.trim() === '') {
      setError('Нужно ввести ключевое слово.');
    } else {
      setError('');

      // проверяем наличие похожего запроса
        const isDuplicate = searchResults && searchResults.some(
        (result) => result.searchText.toLowerCase() === searchValue.toLowerCase()
      );

      if (isDuplicate) {
        setDuplicateError('Такой запрос уже был.');
      } else {
        setDuplicateError('');
        onSearch(searchValue);
        setSearchValue('');
      }
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setError('');
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

      {error && <span className='search__error'>{error}</span>}
      {duplicateError && <span className='search__error'>{duplicateError}</span>}

      <FilterCheckbox onFilterChange={onFilterChange} isChecked={isChecked} />

      <div className='search__line-stroke' />
    </section>
  )
}

export default SearchForm
