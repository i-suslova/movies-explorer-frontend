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
  const [searchText, setSearchText] = useState('');
  const [showAllMovies, setShowAllMovies] = useState(true);

  useEffect(() => {
    setIsShortFilm(isShortFilmChecked);
  }, [isShortFilmChecked]);

  useEffect(() => {
    const updatedFilteredMovies =
      filterMovies(savedMovies, searchText, isShortFilm);
    setFilteredMovies(updatedFilteredMovies);
  }, [savedMovies, searchText, isShortFilm]);

  const handleSearch = (newSearchText, newIsShortFilm) => {
    setIsLoading(true);

    const newFilteredMovies = filterMovies
      (savedMovies, newSearchText, newIsShortFilm);

    setSearchResults([
      {
        searchText: newSearchText,
        movies: newFilteredMovies,
        isShortFilm: newIsShortFilm,
      },
    ]);

    setSearchText(newSearchText);

    if (newFilteredMovies.length > 0) {
      setFilteredMovies(newFilteredMovies);
      setIsMovieFound(true);
      setShowAllMovies(false);
    } else {
      setIsMovieFound(false);
      setShowAllMovies(!newIsShortFilm);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(false);
    setFilteredMovies(savedMovies);
  }, [savedMovies, setIsLoading]);

  useEffect(() => {
    setShowAllMovies(!isShortFilmChecked);
  }, [isShortFilmChecked]);

  const handleDeleteMovie = (movieId) => {
    onDeleteMovie(movieId);
    const updatedFilteredMovies = filterMovies(savedMovies, searchText, isShortFilm);
    setFilteredMovies(updatedFilteredMovies);
  };

  useEffect(() => {
    const updatedFilteredMovies = filterMovies(savedMovies, searchText, isShortFilm);
    setFilteredMovies(updatedFilteredMovies);
  }, [savedMovies, searchText, isShortFilm]);

  return (
    <main>
      <Header loggedIn={loggedIn} />

      <section className='movies'>
        <SearchForm
          onSearch={handleSearch}
          isShortFilm={isShortFilm}
          isShortFilmChecked={isShortFilmChecked}
          setIsShortFilmChecked={setIsShortFilmChecked}
          setIsShortFilm={setIsShortFilm}
          isMovieFound={isMovieFound}
          setIsMovieFound={setIsMovieFound}
          componentType="savedMovies"
          searchText={searchText}
          setSearchText={setSearchText}

        />

        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            searchResults={searchResults}
            // onDeleteMovie={onDeleteMovie}
            onDeleteMovie={handleDeleteMovie}
            isSavedMovies={true}
            setSavedMovies={setSavedMovies}
            onSaveMovie={onSaveMovie}
            savedMovies={showAllMovies ? savedMovies : filteredMovies}
          />
        )}
      </section>
      <Footer />
    </main>
  );
};

export default SavedMovies;
