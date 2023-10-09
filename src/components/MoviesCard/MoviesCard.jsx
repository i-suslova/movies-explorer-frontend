import React, { useState } from 'react';

import './MoviesCard.css';


const MoviesCard = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const isInSavedMovies = props.isSavedMovies;
  const handleSaveButtonClick = () => {
    setIsSaved(!isSaved);
  };

  const buttonClass = `card__button hover ${
    isSaved ? (isInSavedMovies ? 'card__button_delete' : 'card__button_saved_activ') : 'card__button_saved'
  }`;

  return (
    <article className="card">
      <img src={props.movie.image}
        alt={`Обложка фильма ${props.movie.nameRU}`}
        className="card__photo" />
      <h2 className="card__title">{props.movie.nameRU}</h2>
      <p className="card__duration">{props.movie.duration}</p>
      <button
        type="button"
        className={buttonClass}
        aria-label="кнопка"
        onClick={handleSaveButtonClick}
      ></button>
    </article>
  );
};

export default MoviesCard;


