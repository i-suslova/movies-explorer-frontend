
import React, { useState } from 'react';

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import filterMovies from '../../utils/filterMovies';

const SavedMovies = (props) => {
  const {
    loggedIn,
    savedMovies,
    onDeleteMovie,
    setSavedMovies,
    onSaveMovie,
    isLoading,
    setIsLoading,
  } = props;

  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchResults, setSearchResults] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isMovieFound, setIsMovieFound] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [restoreMovies, setRestoreMovies] = useState(savedMovies);

  const handleSearch = (newSearchText, newIsShortFilm) => {

    setIsLoading(true);

    const newFilteredMovies = filterMovies(savedMovies, newSearchText, newIsShortFilm);

    setSearchResults([
      { searchText: newSearchText, movies: newFilteredMovies, isShortFilm: newIsShortFilm },
    ]);

    setSearchText(newSearchText);

    if (newFilteredMovies.length > 0) {
      setFilteredMovies(newFilteredMovies);
      setIsMovieFound(true);
    } else {
      setFilteredMovies([]);
      setIsMovieFound(false);
    }
    setIsLoading(false);
  };

  const handleFilterChange = (newIsShortFilm) => {
    localStorage.setItem('isShortSavedFilm', JSON.stringify(newIsShortFilm));
    setIsShortFilm((prevIsShortFilm) => !prevIsShortFilm);
  };

  const handleRestoreMovies = () => {
    if (restoreMovies.length > 0) {
      setFilteredMovies(restoreMovies);
      setIsMovieFound(true);
    }
  };

  return (
    <main>
      <Header loggedIn={loggedIn} />

      <section className='movies'>
        <SearchForm
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
          searchResults={searchResults}
          isMovieFound={isMovieFound}
          componentType="savedMovies"
          setIsMovieFound={setIsMovieFound}
          handleRestoreMovies={handleRestoreMovies}
        />

        {filteredMovies.length > 0 && (
          <MoviesCardList
            searchResults={searchResults}
            onDeleteMovie={onDeleteMovie}
            isSavedMovies={true}
            setSavedMovies={setSavedMovies}
            onSaveMovie={onSaveMovie}
            savedMovies={filteredMovies}
            isShortFilm={isShortFilm}
          />
        )}

      </section>
      <Footer />
    </main>
  );
};

export default SavedMovies;
