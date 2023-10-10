import React from 'react'

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { saveMoviesData } from '../../utils/cardsMoviesData';
// import Preloader from '../Preloader/Preloader';

const SavedMovies = () => {
  return (
    <>
      <Header
      />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList moviesData={saveMoviesData} isSavedMovies={true} />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies


