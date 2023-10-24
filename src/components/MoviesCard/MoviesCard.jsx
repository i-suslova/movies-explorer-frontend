import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MoviesCard.css';
import { MOVIES_API_URL } from '../../utils/constants'

const MoviesCard = (props) => {
  const { movie } = props;
  const [isSaved, setIsSaved] = useState(false);
  const isInSavedMovies = props.isSavedMovies;
  const handleSaveButtonClick = () => {
    setIsSaved(!isSaved);
  };
  const imageUrl = `${MOVIES_API_URL}${movie.image.url}`
  const buttonClass = `card__button hover ${isSaved ? (isInSavedMovies ? 'card__button_delete' : 'card__button_saved_activ') : 'card__button_saved'
    }`;

  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const durationMovie = `${hours}ч ${minutes}м`;

  return (
    <article className='card'>
      <Link to={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img
          src={imageUrl}
          alt={`Фото фильма ${movie.nameRU}`}
          className='card__photo hover'
        />
      </Link>
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


