<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

import './Movies.css';

import iconRefusal from "../../images/iconRefusal.svg";

=======
import React from 'react'

import './Movies.css';
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
<<<<<<< HEAD
import moviesApi from "../../utils/MoviesApi";
import filterMovies from '../../utils/filterMovies';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Movies = (props) => {
  const {
    loggedIn,
    setMoviesData,
    moviesData,
    savedMovies,
    onSaveMovie,
    onDeleteMovie,
    isLoading,
    setIsLoading,
  } = props;

  const [searchResults, setSearchResults] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isMovieFound, setIsMovieFound] = useState(true);
  const [errorLoadingMovies, setErrorLoadingMovies] = useState(false);

  const handleSearch = (searchText) => {

    const newFilteredMovies = filterMovies(moviesData, searchText, isShortFilm);

    const newSearchResults = { searchText, movies: newFilteredMovies, isShortFilm };

    const updatedSearchResults = [...searchResults, newSearchResults];
    localStorage.setItem('searchResults', JSON.stringify(updatedSearchResults));

    setSearchResults(updatedSearchResults);
    setSearchText(searchText);

    if (newFilteredMovies.length > 0) {
      setFilteredMovies(newFilteredMovies);
      setIsMovieFound(true);
    } else {
      setIsMovieFound(false);
    }
  };

  const handleFilterChange = (isShortFilm) => {
    setIsShortFilm(isShortFilm);
  };

  useEffect(() => {
    const storedSearchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    setSearchResults(Array.isArray(storedSearchResults) ? storedSearchResults : []);
    const storedSearchText = localStorage.getItem('searchText') || '';
    setSearchText(storedSearchText);
    const storedIsShortFilm = JSON.parse(localStorage.getItem('isShortFilm')) || false;
    setIsShortFilm(storedIsShortFilm);
  }, []);


  useEffect(() => {

    setIsLoading(true);
    moviesApi.getInitialMovies()
      .then((movies) => {
        setMoviesData(movies);
        setFilteredMovies(movies);
      })
      .catch(() => {
        setErrorLoadingMovies(true);
        console.error(
          'Во время запроса произошла ошибка. ' +
          'Возможно, проблема с соединением или сервер недоступен. ' +
          'Подождите немного и попробуйте ещё раз.'
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading, setMoviesData]);

  return (
    <main>
      <Header
        loggedIn={loggedIn}
      />
      <section className='movies'>
        <SearchForm
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          isShortFilm={isShortFilm}
          searchResults={searchResults}
          setIsShortFilm={setIsShortFilm}
          isMovieFound={isMovieFound}
          setIsMovieFound={setIsMovieFound}
          componentType="movies"
        />

        {isLoading ? (
          <Preloader />
        ) : errorLoadingMovies ? (
          <InfoTooltip
            isOpen={true}
            onClose={() => setErrorLoadingMovies(false)}
            iconImage={iconRefusal}
            popupMessage="Во время запроса произошла ошибка.
             Возможно, проблема с соединением или сервер недоступен.
             Подождите немного и попробуйте ещё раз."
          />
        ) : (
          (searchText || searchResults.length > 0) &&
          filteredMovies.length > 0 && (
            <MoviesCardList
              searchResults={searchResults}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
              isSavedMovies={false}
              componentType="movies"
            />
          )
        )}

=======
import { moviesData } from '../../utils/cardsMoviesData';
// import Preloader from '../Preloader/Preloader';

const Movies = ({ loggedIn }) => {
  return (
    <main>
      <Header
        isLoggedIn={loggedIn}
      />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList moviesData={moviesData} isSavedMovies={false} />
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
      </section>
      <Footer />
    </main>
  )
}

<<<<<<< HEAD
export default Movies;
=======
export default Movies
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c

