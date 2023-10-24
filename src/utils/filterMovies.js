
const filterMovies = (moviesData, searchText, isShortFilm) => {
  const lowerCaseSearchText = searchText.toLowerCase();

  let filtered = moviesData.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(lowerCaseSearchText) ||
      movie.nameEN.toLowerCase().includes(lowerCaseSearchText)
  );

  if (isShortFilm) {
    filtered = filtered.filter((movie) => movie.duration <= 40);
  }

  return filtered;
};

export default filterMovies;
