import React, { useState, useEffect } from 'react';

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import filterMovies from '../../utils/filterMovies';
import Preloader from '../Preloader/Preloader';

const SavedMovies = (props) => {
  const {
    loggedIn,
    savedMovies,
    setSavedMovies,
    onSaveMovie,
    onDeleteMovie,
    isLoading,
    setIsLoading,
  } = props;

  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchResults, setSearchResults] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);
  const [isMovieFound, setIsMovieFound] = useState(true);
  // eslint-disable-next-line
  const [searchText, setSearchText] = useState('');
  // eslint-disable-next-line
  const [restoreMovies, setRestoreMovies] = useState(savedMovies);

  useEffect(() => {
    setIsLoading(false);
    setFilteredMovies(savedMovies);
  }, [savedMovies, setIsLoading]);

  useEffect(() => {
    setIsShortFilm(isShortFilmChecked);
  }, [isShortFilmChecked]);

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
      setIsShortFilmChecked(false);
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
          isShortFilmChecked={isShortFilmChecked}
          setIsShortFilmChecked={setIsShortFilmChecked}
          setIsShortFilm={setIsShortFilm}
          searchResults={searchResults}
          isMovieFound={isMovieFound}
          componentType="savedMovies"
          setIsMovieFound={setIsMovieFound}
          handleRestoreMovies={handleRestoreMovies}
        />

        {isLoading ? (
          <Preloader />
        ) : (
          (filteredMovies.length > 0 && (
            <MoviesCardList
              searchResults={searchResults}
              onDeleteMovie={onDeleteMovie}
              isSavedMovies={true}
              setSavedMovies={setSavedMovies}
              onSaveMovie={onSaveMovie}
              savedMovies={filteredMovies}
              isShortFilm={isShortFilm}
            />
          ))
        )}

      </section>
      <Footer />
    </main>
  );
};

export default SavedMovies;
