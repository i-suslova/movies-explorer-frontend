import React from 'react'

import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { moviesData } from '../../utils/cardsMoviesData';
// import Preloader from '../Preloader/Preloader';

const Movies = (props) => {
  const { loggedIn } = props;
  return (
    <main>
      <Header
        loggedIn={loggedIn}

      />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList moviesData={moviesData} isSavedMovies={false} />
      </section>
      <Footer />
    </main>
  )
}

export default Movies

