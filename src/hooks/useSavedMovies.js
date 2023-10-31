import { useState } from 'react';

const useSavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  const handleToggleSaved = (movie) => {
    const isMovieSaved = savedMovies.some((savedMovie) => savedMovie._id === movie._id);

    if (isMovieSaved) {
      setSavedMovies((prevSavedMovies) =>
        prevSavedMovies.filter((savedMovie) => savedMovie._id !== movie._id)
      );
    } else {
      setSavedMovies((prevSavedMovies) => [...prevSavedMovies, movie]);
    }
  };

  return { savedMovies, handleToggleSaved };
};

export default useSavedMovies;
