import React, { useState, useEffect } from 'react';

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import filterMovies from '../../utils/filterMovies';

// import Preloader from '../Preloader/Preloader';

const SavedMovies = (props) => {
  const { loggedIn, savedMovies, onDeleteMovie, setSavedMovies, onSaveMovie} = props;

  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchResults, setSearchResults] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
 

  const handleSearch = (searchText, isDuplicate) => {
    const newFilteredMovies = filterMovies(savedMovies, searchText, isChecked, isShortFilm);

    if (!isDuplicate) {
      const newSearchResults = { searchText, movies: newFilteredMovies, isShortFilm };

      const updatedSearchResults = [...searchResults, newSearchResults];

      setSearchResults(updatedSearchResults);

      // Обновляем состояние filteredMovies
      setFilteredMovies(newFilteredMovies);
    }
  };

  const handleFilterChange = (isChecked) => {
    setIsShortFilm(isChecked);
    setIsChecked(isChecked);
    // Фильтруем фильмы в зависимости от состояния isShortFilm
    // const newFilteredMovies = filterMovies(savedMovies, '', isChecked, isShortFilm);
    const newFilteredMovies = filterMovies(savedMovies, '', isChecked, isChecked);

    // Обновляем состояние filteredMovies
    setFilteredMovies(newFilteredMovies);
  };

  useEffect(() => {
    const storedSearchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    setSearchResults(Array.isArray(storedSearchResults) ? storedSearchResults : []);
     // При изменении savedMovies обновляем filteredMovies
    //  setFilteredMovies(savedMovies);
    setFilteredMovies([...savedMovies]);
  }, [savedMovies, isChecked]);
// }, [savedMovies, isChecked, isShortFilm]);

    return (
      <main>
        <Header loggedIn={loggedIn} />

        <section className='movies'>

          <SearchForm
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            isChecked={isChecked}
            searchResults={searchResults}
            componentType="savedMovies"
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

  export default SavedMovies




