import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

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

  const [movies, setMovies] = useState(savedMovies);

  useEffect(() => {
    setMovies(savedMovies);
  }, [savedMovies]);

  const path = useLocation().pathname;
  const isSavedMoviesPath = path === '/saved-movies';

  const [cardsPerPage, setCardsPerPage] = useState(0);

  // считаем все карточки из поисковой строки
  const calculateTotalMovies = () => {
    let total = 0;

    if (searchResults) {
      searchResults.forEach((searchResult) => {
        total += searchResult.movies ? searchResult.movies.length : 0;
      });
    }
    return total;
  };
  const totalMovies = calculateTotalMovies();

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

  const filteredMovies = searchResults && searchResults.length > 0
    ? removeDuplicateMovies(searchResults.map(result => result.movies).flat())
    : [];

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth > 865) {
          setCardsPerPage(cardsPerPage || 16);
        } else if (screenWidth > 750) {
          setCardsPerPage(cardsPerPage || 12);
        } else if (screenWidth >= 318) {
          setCardsPerPage(cardsPerPage || 5);
        } else {
          setCardsPerPage(0);
        }
      }, 200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cardsPerPage]);

  // загрузка дополнительных карточек при помощи кнопки
  const handleLoadMore = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 865) {
      setCardsPerPage((prevCardsPerPage) => prevCardsPerPage + 4);
    } else {
      setCardsPerPage((prevCardsPerPage) => prevCardsPerPage + 2);
    }
  };

   console.log('totalMovies', totalMovies)

  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__page'>
        {isSavedMoviesPath && (
          <>
            {savedMovies
              ? savedMovies.map((movie) => (
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
            {filteredMovies
            .slice(0, cardsPerPage)

            .map((movie) => (
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
        searchResults && filteredMovies.length > cardsPerPage  && (
          <button
            className='movies-card-list__button hover'
            type='button'
            onClick={handleLoadMore}
          >
            Ещё
          </button>
        )
        // )
      }
    </section >
  );
};

export default MoviesCardList;

