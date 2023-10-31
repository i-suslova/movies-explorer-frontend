// import React, { useState, useEffect } from 'react';

// import './Movies.css';
// import Header from '../Header/Header';
// import SearchForm from '../SearchForm/SearchForm';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Footer from '../Footer/Footer';
// import NotFoundPage from '../NotFoundPage/NotFoundPage';
// import moviesApi from "../../utils/MoviesApi";
// import filterMovies from '../../utils/filterMovies';
// import Preloader from '../Preloader/Preloader';

// const Movies = (props) => {
//   const { loggedIn, setMoviesData, moviesData, onSaveMovie, onDeleteMovie, savedMovies, setSavedMovies } = props;

//   const [searchResults, setSearchResults] = useState([]);
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [isShortFilm, setIsShortFilm] = useState(false);
//   const [isMovieFound, setIsMovieFound] = useState(true);
//   // const [isMoviesLoaded, setIsMoviesLoaded] = useState(false);


//   const handleSearch = (searchText, isDuplicate) => {
//     const newFilteredMovies = filterMovies(moviesData, searchText, isShortFilm);

//     if (!isDuplicate) {
//       const newSearchResults = { searchText, movies: newFilteredMovies, isShortFilm };

//       const updatedSearchResults = [...searchResults, newSearchResults];
//       localStorage.setItem('searchResults', JSON.stringify(updatedSearchResults));

//       setSearchResults(updatedSearchResults);
//       setSearchText(searchText);

//       if (newFilteredMovies.length > 0) {
//         setFilteredMovies(newFilteredMovies);

//         setIsMovieFound(true);
//       } else {
//         setIsMovieFound(false);
//       }
//     } else {
//       // setIsMovieFound(false);
//       setIsMovieFound(newFilteredMovies.length > 0);
//     }
//   };

//   const handleFilterChange = (isChecked) => {
//     setIsShortFilm(isChecked);
//   };

//   useEffect(() => {
//     // извлекаем результаты поиска из локального хранилища
//     //найденные фильмы
//     const storedSearchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
//     setSearchResults(Array.isArray(storedSearchResults) ? storedSearchResults : []);
//     //текст запроса
//     const storedSearchText = localStorage.getItem('searchText') || '';
//     setSearchText(storedSearchText);
//     //состояние переключателя короткометражных фильмов
//     const storedIsShortFilm = JSON.parse(localStorage.getItem('isShortFilm')) || false;
//     setIsShortFilm(storedIsShortFilm);

//     // if (!isMoviesLoaded) {
//     moviesApi.getInitialMovies()
//       .then((movies) => {
//         setMoviesData(movies);
//         setFilteredMovies(movies);
//         // setIsMoviesLoaded(true);
//       })
//       .catch((error) => {
//         console.error('Ошибка:', error);
//       });
//     // }
//   // }, [setMoviesData, isMoviesLoaded]);
//   }, [setMoviesData]);


//   return (
//     <main>
//       <Header
//         loggedIn={loggedIn}
//       />
//       <section className='movies'>

//         <SearchForm
//           onSearch={handleSearch}
//           onFilterChange={handleFilterChange}
//           isChecked={isShortFilm}
//           searchResults={searchResults}
//           isMovieFound={isMovieFound}
//           setIsMovieFound={setIsMovieFound}
//         />

//         {(searchText || searchResults.length > 0) && filteredMovies.length > 0 && (
//           <MoviesCardList
//             searchResults={searchResults}
//             onSaveMovie={onSaveMovie}
//             onDeleteMovie={onDeleteMovie}
//             savedMovies={filteredMovies}
//             // savedMovies={savedMovies}
//             isSavedMovies={false}
//             setSavedMovies={setSavedMovies}

//           />
//         )}

//       </section>
//       <Footer />
//     </main>
//   )
// }

// export default Movies
import React, { useState, useEffect } from 'react';

import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import moviesApi from "../../utils/MoviesApi";
import filterMovies from '../../utils/filterMovies';
import Preloader from '../Preloader/Preloader';

const Movies = (props) => {
  const { loggedIn, setMoviesData, moviesData, onSaveMovie, onDeleteMovie, savedMovies} = props;

  const [searchResults, setSearchResults] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isMovieFound, setIsMovieFound] = useState(true);


  const handleSearch = (searchText, isDuplicate) => {
    const newFilteredMovies = filterMovies(moviesData, searchText, isShortFilm);

    if (!isDuplicate) {
      const newSearchResults = { searchText, movies: newFilteredMovies, isShortFilm };

      const updatedSearchResults = [...searchResults, newSearchResults];
      localStorage.setItem('searchResults', JSON.stringify(updatedSearchResults));

      setSearchResults(updatedSearchResults);
      setSearchText(searchText);

      if (newFilteredMovies.length > 0) {
        setFilteredMovies(newFilteredMovies);

        setIsMovieFound(true);
      } else {
        setIsMovieFound(false);
      }
    } else {
      // setIsMovieFound(false);
      setIsMovieFound(newFilteredMovies.length > 0);
    }
  };

  const handleFilterChange = (isChecked) => {
    setIsShortFilm(isChecked);
  };

  useEffect(() => {
    // извлекаем результаты поиска из локального хранилища
    //найденные фильмы
    const storedSearchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    setSearchResults(Array.isArray(storedSearchResults) ? storedSearchResults : []);
    //текст запроса
    const storedSearchText = localStorage.getItem('searchText') || '';
    setSearchText(storedSearchText);
    //состояние переключателя короткометражных фильмов
    const storedIsShortFilm = JSON.parse(localStorage.getItem('isShortFilm')) || false;
    setIsShortFilm(storedIsShortFilm);

    moviesApi.getInitialMovies()
      .then((movies) => {
        setMoviesData(movies);
        setFilteredMovies(movies);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });

  }, [setMoviesData]);

  return (
    <main>
      <Header
        loggedIn={loggedIn}
      />
      <section className='movies'>

        <SearchForm
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          isChecked={isShortFilm}
          searchResults={searchResults}
          isMovieFound={isMovieFound}
          setIsMovieFound={setIsMovieFound}
          componentType="movies"
        />

        {(searchText || searchResults.length > 0) && filteredMovies.length > 0 && (
          <MoviesCardList
            searchResults={searchResults}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            savedMovies={savedMovies}
            // savedMovies={filteredMovies}
            isSavedMovies={false}
          />
        )}

      </section>
      <Footer />
    </main>
  )
}

export default Movies

