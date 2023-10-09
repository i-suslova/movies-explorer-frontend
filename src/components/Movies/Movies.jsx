import React from 'react'

import './Movies.css';
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';
import { moviesData } from '../../utils/cardsMoviesData';
// import Preloader from "../Preloader/Preloader";

const Movies = ({ loggedIn }) => {
  return (
    <>
      <Header
        isLoggedIn={loggedIn}
      />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList moviesData={moviesData} isSavedMovies={false} />
      </section>
      <Footer />
    </>
  )
}

export default Movies

