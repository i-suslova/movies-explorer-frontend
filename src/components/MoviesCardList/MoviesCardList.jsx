import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
  const { isSavedMovies, moviesData } = props;

  console.log('Movies Data:', moviesData);
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__page'>
        {moviesData.map((movie) => (
          <li key={movie.id} className='movies-card-list__item'>
            <MoviesCard
              key={movie._id}
              movie={movie}
              isSavedMovies={isSavedMovies}
            />
          </li>
        ))}
      </ul>
      <button className='movies-card-list__button hover' type='button'>
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;

