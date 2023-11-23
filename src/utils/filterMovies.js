import { SHORT_FILM_DURATION } from "./constants";

const filterMovies = (moviesData, searchText, isShortFilm) => {
  const lowerCaseSearchText = searchText.toLowerCase();

  let filtered = moviesData.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(lowerCaseSearchText) ||
      movie.nameEN.toLowerCase().includes(lowerCaseSearchText)
  );

  if (isShortFilm) {
    filtered = filtered.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
  }

  return filtered;
};

export default filterMovies;




