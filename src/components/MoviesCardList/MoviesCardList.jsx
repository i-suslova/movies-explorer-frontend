import React from 'react'
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = (props) => {

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__page'>
        {props.moviesData.map((movie) => (
          <MoviesCard key={movie.movieId} movie={movie} />
        ))}
      </div>
      <button className="movies-card-list__button hover" type="button">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;




