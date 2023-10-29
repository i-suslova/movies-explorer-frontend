import React, { useState} from 'react';

import './MoviesCard.css';
import { MOVIES_API_URL } from '../../utils/constants'

const MoviesCard = (props) => {

  const { movie, onSaveMovie, onDeleteMovie, savedMovies, isSavedMovies } = props;
  const [isSaved, setIsSaved] = useState(savedMovies.some(savedMovie => savedMovie._id === movie._id));
  const isInSavedMovies = isSavedMovies;

  const imageUrl = `${MOVIES_API_URL}${movie.image.url}`;

  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const durationMovie = `${hours}ч ${minutes}м`;

  const handleSaveButtonClick = () => {
    setIsSaved(!isSaved);

    if (!isSaved && onSaveMovie) {
      onSaveMovie(movie);
    } else if (onDeleteMovie) {
      onDeleteMovie(movie._id);
    }
  };

  const buttonClass = `card__button hover ${isInSavedMovies
     ? 'card__button_delete' : isSaved
     ? 'card__button_saved_activ' : 'card__button_saved'
    }`;

  return (
    <article className='card'>
      <img
        onClick={() => window.open(movie.trailerLink, '_blank', 'noreferrer')}
        src={isInSavedMovies ? movie.image : imageUrl}
        alt={`Фото фильма ${movie.nameRU}`}
        className='card__photo hover'
      />
      <h2 className='card__title'>{movie.nameRU}</h2>
      <p className='card__duration'>{durationMovie}</p>
      <button
        type='button'
        className={buttonClass}
        aria-label='кнопка'
        onClick={handleSaveButtonClick}

      ></button>
    </article>
  );
};

export default MoviesCard;


