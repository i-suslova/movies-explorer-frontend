import React, { useState, useEffect } from 'react';

import './Movies.css';

import iconRefusal from "../../images/iconRefusal.svg";

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from "../../utils/MoviesApi";
import filterMovies from '../../utils/filterMovies';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Movies = (props) => {

  const {
    loggedIn,
    setMoviesData,
    savedMovies,
    onSaveMovie,
    onDeleteMovie,
    isLoading,
    setIsLoading,
  } = props;

  const [searchResults, setSearchResults] = useState([]);
  // eslint-disable-next-line
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isMovieFound, setIsMovieFound] = useState(true);
  const [errorLoadingMovies, setErrorLoadingMovies] = useState(false);

  const handleSearch = (searchText) => {
    setIsLoading(true);

    const storedData = JSON.parse(localStorage.getItem('moviesData')) || {};
    const storedMoviesData = storedData.movies || [];

    if (storedMoviesData && storedMoviesData.length > 0) {
      const newFilteredMovies = filterMovies(storedMoviesData, searchText, isShortFilm);
      updateSearchResults(searchText, newFilteredMovies);
      setIsLoading(false);
    } else {
      // запрос на сервер если нет данных в локальном хранилище
      moviesApi
        .getInitialMovies()
        .then((movies) => {
          setMoviesData([...movies]);

          localStorage.setItem('moviesData', JSON.stringify({ movies }));

          const newFilteredMovies = filterMovies(movies, searchText, isShortFilm);
          updateSearchResults(searchText, newFilteredMovies);
        })
        .catch(() => {
          setErrorLoadingMovies(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const updateSearchResults = (searchText, newFilteredMovies) => {
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

    const storedMoviesData = JSON.parse(localStorage.getItem('moviesData')) || [];
    setMoviesData(Array.isArray(storedMoviesData) ? storedMoviesData : []);

    const storedSearchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    setSearchResults(Array.isArray(storedSearchResults) ? storedSearchResults : []);

    const storedSearchText = localStorage.getItem('searchText') || '';
    setSearchText(storedSearchText);
    const storedIsShortFilm = JSON.parse(localStorage.getItem('isShortFilm')) || false;
    setIsShortFilm(storedIsShortFilm);

    if (storedSearchText && storedMoviesData.length > 0 &&
       storedSearchResults.length > 0 && !isLoading) {
      handleSearch(storedSearchText, storedIsShortFilm);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (searchResults.length > 0 || searchText) {
      setIsLoading(false);
    }
  }, [searchResults, searchText, setIsLoading]);

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
        ) : (searchResults.length > 0 && (
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

      </section>
      <Footer />
    </main>
  )
}

export default Movies;
