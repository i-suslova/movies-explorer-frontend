import React, { useState, useEffect } from 'react';

import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from "../../utils/MoviesApi";
// import Preloader from '../Preloader/Preloader';

const Movies = (props) => {
  const { loggedIn, setMoviesData, moviesData } = props;

  // const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {

    moviesApi.getInitialMovies()
    .then((moviesData) => {
        setMoviesData(moviesData);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <main>
      <Header
        loggedIn={loggedIn}

      />
      <section className='movies'>
        <SearchForm />
        {/* <SearchForm searchMovies={searchMovies} searchValue={searchValue} /> */}

        {moviesData.length > 0 && (
          <MoviesCardList moviesData={moviesData} isSavedMovies={false} />
        )}
      </section>
      <Footer />
    </main>
  )
}

export default Movies

