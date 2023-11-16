import React, { useState } from 'react';

import './MoviesCard.css';
<<<<<<< HEAD
import { MOVIES_API_URL } from '../../utils/constants'

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

  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const durationMovie = `${hours}ч ${minutes}м`;

  const handleToggleClick = () => {
    if (isSavedMovies) {

      if (onDeleteMovie) {
        const savedMovie = savedMovies.some(savedMovie => savedMovie._id === movie._id);
        if (savedMovie) {
          onDeleteMovie(movie._id);
        }
      }
    } else {

      if (isSaved) {
        if (onDeleteMovie) {
          const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === movie.id);
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
=======


const MoviesCard = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const isInSavedMovies = props.isSavedMovies;
  const handleSaveButtonClick = () => {
    setIsSaved(!isSaved);
  };

  const buttonClass = `card__button hover ${isSaved ? (isInSavedMovies ? 'card__button_delete' : 'card__button_saved_activ') : 'card__button_saved'
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
    }`;

  return (
    <article className='card'>
<<<<<<< HEAD
      <img
        onClick={() => window.open(movie.trailerLink, '_blank', 'noreferrer')}
        src={isSavedMovies ? movie.image : imageUrl}
        alt={`Фото фильма ${movie.nameRU}`}
        className='card__photo hover'
      />
      <h2 className='card__title'>{movie.nameRU}</h2>
      <p className='card__duration'>{durationMovie}</p>


=======
      <img src={props.movie.image}
        alt={`Обложка фильма ${props.movie.nameRU}`}
        className='card__photo' />
      <h2 className='card__title'>{props.movie.nameRU}</h2>
      <p className='card__duration'>{props.movie.duration}</p>
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
      <button
        type='button'
        className={buttonClass}
        aria-label='кнопка'
<<<<<<< HEAD
        onClick={handleToggleClick}
      ></button>


    </article >
=======
        onClick={handleSaveButtonClick}
      ></button>
    </article>
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
  );
};

export default MoviesCard;


