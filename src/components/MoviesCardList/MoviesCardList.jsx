import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  const { searchResults, onSaveMovie, onDeleteMovie, savedMovies, isSavedMovies, setSavedMovies} = props;
  const [movies, setMovies] = useState(savedMovies);

  const path = useLocation().pathname;
  const isSavedMoviesPath = path === '/saved-movies';

  useEffect(() => {
    setMovies(savedMovies);
  }, [savedMovies]);

  return (
    <section className='movies-card-list'>

      <ul className='movies-card-list__page'>

        {isSavedMoviesPath && (
          <>
            {savedMovies
              ? savedMovies.map((movie) => (
                <li key={movie._id || movie.movieId} className='movies-card-list__item'>
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
              : null
            }
          </>
        )}
        {!isSavedMoviesPath && (
          <>
            {searchResults && searchResults.map((searchResult) => (
              searchResult.movies && searchResult.movies.map((movie) => (
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
              ))
            ))}
          </>
        )}
      </ul>
      <button className='movies-card-list__button hover' type='button'>
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;

