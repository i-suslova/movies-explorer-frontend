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
import { SHORT_FILM_DURATION } from '../../utils/constants';

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
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);

  const handleSearch = (searchText) => {
    setIsLoading(true);

    setSearchResults([]);

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

  useEffect(() => {

    const storedMoviesData = JSON.parse(localStorage.getItem('moviesData')) || [];
    setMoviesData(Array.isArray(storedMoviesData) ? storedMoviesData : []);

    const storedSearchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    setSearchResults(Array.isArray(storedSearchResults) ? storedSearchResults : []);

    const storedSearchText = localStorage.getItem('searchText') || '';
    setSearchText(storedSearchText);

    const storedIsShortFilm = JSON.parse(localStorage.getItem('isShortFilm')) || false;
    setIsShortFilm(storedIsShortFilm);
    setIsShortFilmChecked(storedIsShortFilm);

    if (storedSearchText && storedMoviesData.length > 0 &&
      storedSearchResults.length > 0 && !isLoading) {
      handleSearch(storedSearchText, storedIsShortFilm);
    }
    // eslint-disable-next-line
  }, []);

  const updateSearchResults = (searchText, newFilteredMovies) => {
    setSearchResults([{ searchText, movies: newFilteredMovies, isShortFilmChecked }]);
    setSearchText(searchText);

    localStorage.setItem('searchText', searchText);
    localStorage.setItem('isShortFilm', JSON.stringify(isShortFilm));
    localStorage.setItem('searchResults', JSON.stringify([{ searchText, movies: newFilteredMovies, isShortFilmChecked }]));

    if (newFilteredMovies.length > 0) {
      setFilteredMovies(newFilteredMovies);
      setIsMovieFound(true);
    } else {
      setIsMovieFound(false);
    }
  };

  useEffect(() => {
    setIsShortFilm(isShortFilmChecked);
  }, [isShortFilmChecked]);

  useEffect(() => {
    if (searchResults.length > 0 || searchText) {
      setIsLoading(false);
    }
  }, [searchResults, searchText, setIsLoading]);

  const handleFilterChange = () => {
    const storedSearchResults = JSON.parse(localStorage.getItem('searchResults')) || [];

    const newFilteredMovies = isShortFilm
      ? storedSearchResults
      : storedSearchResults.map(result => ({
        ...result,
        movies: result.movies ? result.movies.filter(movie =>
          movie.duration <= SHORT_FILM_DURATION) : [],
      }));

    setSearchResults(newFilteredMovies);
  };

  return (
    <main>
      <Header
        loggedIn={loggedIn}
      />
      <section className='movies'>
        <SearchForm
          onSearch={handleSearch}
          isShortFilm={isShortFilm}
          searchResults={searchResults}
          setIsShortFilm={setIsShortFilm}
          isMovieFound={isMovieFound}
          setIsMovieFound={setIsMovieFound}
          componentType="movies"
          setIsShortFilmChecked={setIsShortFilmChecked}
          isShortFilmChecked={isShortFilmChecked}
          onShortFilm={handleFilterChange}
          searchText={searchText}
          setSearchText={setSearchText}
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
            isShortFilm={isShortFilm}
          />
        )
        )}

      </section>
      <Footer />
    </main>
  )
}

export default Movies;

