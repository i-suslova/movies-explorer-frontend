import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ moviesData, isSavedMovies }) => {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__page'>
        {moviesData.map((movie) => (
          <MoviesCard key={movie.movieId} movie={movie} isSavedMovies={isSavedMovies} />
        ))}
      </div>
      <button className="movies-card-list__button hover" type="button">
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
