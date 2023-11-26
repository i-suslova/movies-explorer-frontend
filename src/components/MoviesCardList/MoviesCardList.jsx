import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import {
  MOVIES_PER_PAGE_LARGE,
  MOVIES_PER_PAGE_MEDIUM,
  MOVIES_PER_PAGE_SMALL,
  MOVIES_PER_PAGE_MOBILE,
  SCREEN_WIDTH_LARGE,
  SCREEN_WIDTH_MEDIUM,
  SCREEN_WIDTH_SMALL,
  SCREEN_WIDTH_MOBILE,
  CARDS_PER_CLICK_LARGE,
  CARDS_PER_CLICK_MEDIUM,
  CARDS_PER_CLICK_MOBILE,
} from '../../utils/constants';

const MoviesCardList = (props) => {
  const {
    searchResults,
    onSaveMovie,
    onDeleteMovie,
    savedMovies,
    isSavedMovies,
    setSavedMovies,
    componentType,
  } = props;
  // eslint-disable-next-line
  const [movies, setMovies] = useState(savedMovies);

  useEffect(() => {
    setMovies(savedMovies);
  }, [savedMovies]);

  const path = useLocation().pathname;
  const isSavedMoviesPath = path === '/saved-movies';

  const [cardsPerPage, setCardsPerPage] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);

  // отфильтровываем карточки с одинаковым ключом {movie._id}
  const removeDuplicateMovies = (movies) => {
    const uniqueMovies = [];
    const movieIds = new Set();

    movies.forEach((movie) => {
      if (movie && movie.id && !movieIds.has(movie.id)) {
        uniqueMovies.push(movie);
        movieIds.add(movie.id);
      }
    });

    return uniqueMovies;
  };

  const filteredMoviesId = searchResults && searchResults.length > 0
    ? removeDuplicateMovies(searchResults.map(result => result.movies).flat())
    : [];

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      setScreenWidth(window.innerWidth);

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
      }, 200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [screenWidth]);

  // загрузка дополнительных карточек при помощи кнопки "ещё"
  const handleLoadMore = () => {
    setLoadMoreClicked(true);
    if (screenWidth > SCREEN_WIDTH_LARGE) {
      setCardsPerPage((prevCardsPerPage) =>
        prevCardsPerPage + CARDS_PER_CLICK_LARGE);
    } else if (screenWidth > SCREEN_WIDTH_MEDIUM) {
      setCardsPerPage((prevCardsPerPage) =>
        prevCardsPerPage + CARDS_PER_CLICK_MEDIUM);
    } else {
      setCardsPerPage((prevCardsPerPage) =>
        prevCardsPerPage + CARDS_PER_CLICK_MOBILE);
    }
  };

  useEffect(() => {
    const storedLoadMore = JSON.parse(localStorage.getItem('loadMore')) || {};
    setCardsPerPage((prevCardsPerPage) =>
      storedLoadMore.cardsPerPage || prevCardsPerPage);
    setScreenWidth((prevScreenWidth) =>
      storedLoadMore.screenWidth || prevScreenWidth || window.innerWidth);
  }, []);

  useEffect(() => {
    if (loadMoreClicked) {
      const storedLoadMore = {
        cardsPerPage,
        screenWidth,
      };
      localStorage.setItem('loadMore', JSON.stringify(storedLoadMore));
    }
  }, [cardsPerPage, screenWidth, loadMoreClicked]);

  useEffect(() => {
    setMovies(savedMovies.slice(0, cardsPerPage));
  }, [cardsPerPage, savedMovies]);

  useEffect(() => {
    const calculateCardsPerPage = (screenWidth) => {
      if (componentType === 'movies') {
        if (screenWidth > SCREEN_WIDTH_LARGE) {
          return MOVIES_PER_PAGE_LARGE;
        } else if (screenWidth > SCREEN_WIDTH_MEDIUM) {
          return MOVIES_PER_PAGE_MEDIUM;
        } else if (screenWidth > SCREEN_WIDTH_SMALL) {
          return MOVIES_PER_PAGE_SMALL;
        } else if (screenWidth >= SCREEN_WIDTH_MOBILE) {
          return MOVIES_PER_PAGE_MOBILE;
        } else {
          return 0;
        }
      } else {
        return savedMovies.length;
      }
    };

    setCardsPerPage(calculateCardsPerPage(screenWidth));
  }, [screenWidth, componentType, savedMovies]);

  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__page'>
        {isSavedMoviesPath && (
          <>
            {savedMovies
              ? savedMovies.slice(0, cardsPerPage).map((movie) => (
                <li key={movie._id || movie.movieId}
                  className='movies-card-list__item'>
                  <MoviesCard
                    key={movie._id}
                    movie={movie}
                    savedMovies={savedMovies}
                    isSavedMovies={isSavedMovies}
                    onDeleteMovie={onDeleteMovie}
                    setSavedMovies={setSavedMovies}
                    onSaveMovie={onSaveMovie}
                  />
                </li>
              ))
              : null}
          </>
        )}
        {!isSavedMoviesPath && (

          <>
            {filteredMoviesId.slice(0, cardsPerPage).map((movie) => (
              <li key={movie.id} className='movies-card-list__item'>
                <MoviesCard
                  key={movie._id}
                  movie={movie}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={onDeleteMovie}
                  savedMovies={savedMovies}
                  isSavedMovies={isSavedMovies}
                  setSavedMovies={setSavedMovies}
                />
              </li>
            ))}
          </>
        )}
      </ul>

      {componentType === 'movies' &&
        searchResults && filteredMoviesId.length > cardsPerPage && (
          <button
            className='movies-card-list__button hover'
            type='button'
            onClick={() => {
              handleLoadMore();
              setLoadMoreClicked(true);
            }}
          >
            Ещё
          </button>
        )
      }
    </section >
  );
};

export default MoviesCardList;


