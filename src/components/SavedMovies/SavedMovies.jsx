import React, { useState, useEffect } from 'react';

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import filterMovies from '../../utils/filterMovies';

// import Preloader from '../Preloader/Preloader';

const SavedMovies = (props) => {
  const { loggedIn, savedMovies, onDeleteMovie, setSavedMovies, onSaveMovie } = props;

  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchResults, setSearchResults] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isMovieFound, setIsMovieFound] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [isShortSavedMovies, setIsShortSavedMovies] = useState(false);
  const [componentType, setComponentType] = useState('savedMovies');

  const handleSearch = (searchText, isDuplicate) => {
    const newFilteredMovies = filterMovies(
      savedMovies,
      searchText,
      isShortFilm,
      // componentType === 'savedMovies' ? isShortSavedMovies : false
    );

    if (!isDuplicate) {
      const newSearchResults = { searchText, movies: newFilteredMovies, isShortFilm };

      const updatedSearchResults = [...searchResults, newSearchResults];

      setSearchResults(updatedSearchResults);
      setSearchText(searchText);

      // Обновляем состояние filteredMovies
      setFilteredMovies(newFilteredMovies);
    }
  };

  const handleFilterChange = (isChecked) => {
    setIsShortFilm(isChecked);
    setIsChecked(isChecked);

    const newFilteredMovies = filterMovies(
      savedMovies,
      '',
      isChecked,
      componentType === 'savedMovies' ? isShortSavedMovies : false
    );
    // Обновляем состояние filteredMovies
    setFilteredMovies(newFilteredMovies);
  };

  const handleCheckboxClick = () => {
    if (componentType === 'savedMovies') {
      setIsShortSavedMovies(!isShortSavedMovies);
    }
  };

  useEffect(() => {
    const storedSearchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    setSearchResults(Array.isArray(storedSearchResults) ? storedSearchResults : []);
    // При изменении savedMovies обновляем filteredMovies
    setFilteredMovies([...savedMovies]);
  }, [savedMovies, isChecked, isShortFilm, isShortSavedMovies]);

  return (
    <main>
      <Header loggedIn={loggedIn} />

      <section className='movies'>

        <SearchForm
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          isChecked={isChecked}
          searchResults={searchResults}
          isMovieFound={isMovieFound}
          // componentType={componentType}
          componentType="savedMovies"
          handleCheckboxClick={handleCheckboxClick}
        />

        {filteredMovies.length > 0 && (
          <MoviesCardList
            searchResults={searchResults}
            onDeleteMovie={onDeleteMovie}
            isSavedMovies={true}
            setSavedMovies={setSavedMovies}
            onSaveMovie={onSaveMovie}
            savedMovies={savedMovies}
          />
        )}

      </section>
      <Footer />
    </main>
  )
}

export default SavedMovies;




