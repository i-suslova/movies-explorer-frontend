import React, { useState } from 'react';

import './MoviesCard.css';
import { MOVIES_API_URL, formatDuration } from '../../utils/constants';

const MoviesCard = (props) => {
  const {
    movie,
    onSaveMovie,
    onDeleteMovie,
    savedMovies,
    isSavedMovies
  } = props;

  const isSavedInThisComponent = isSavedMovies
    ? savedMovies.some(savedMovie => savedMovie._id === movie._id)
    : savedMovies.some(savedMovie => savedMovie.movieId === movie.id);

  const [isSaved, setIsSaved] = useState(isSavedInThisComponent);

  const imageUrl = `${MOVIES_API_URL}${movie.image.url}`;

  const durationMovie = formatDuration(movie.duration);

  const handleToggleClick = () => {
    if (isSavedMovies) {

      if (onDeleteMovie) {
        const savedMovie = savedMovies.some(savedMovie =>
          savedMovie._id === movie._id);
        if (savedMovie) {
          onDeleteMovie(movie._id);
        }
      }
    } else {

      if (isSaved) {
        if (onDeleteMovie) {
          const savedMovie = savedMovies.find(savedMovie =>
            savedMovie.movieId === movie.id);
          if (savedMovie) {
            onDeleteMovie(savedMovie._id);
          }
        }
      } else {
        if (onSaveMovie) {
          onSaveMovie(movie);
        }
      }
    }
    setIsSaved(!isSaved);
  };

  const buttonClass = `card__button hover ${isSavedMovies
    ? 'card__button_delete'
    : isSaved
      ? 'card__button_saved_activ'
      : 'card__button_saved'
    }`;

  return (
    <article className='card'>
      <img
        onClick={() => window.open(movie.trailerLink, '_blank', 'noreferrer')}
        src={isSavedMovies ? movie.image : imageUrl}
        alt={`Фото фильма ${movie.nameRU}`}
        className='card__photo hover'
      />
      <h2 className='card__title'>{movie.nameRU}</h2>
      <p className='card__duration'>{durationMovie}</p>


      <button
        type='button'
        className={buttonClass}
        aria-label='кнопка'
        onClick={handleToggleClick}
      ></button>


    </article >
  );
};

export default MoviesCard;


