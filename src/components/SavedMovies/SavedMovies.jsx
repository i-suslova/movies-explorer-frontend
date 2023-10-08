import React from 'react'

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';
import moviesData from '../../utils/moviesData';
// import Preloader from "../Preloader/Preloader";

const SavedMovies = () => {
  return (
    <>
      <Header
      />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList moviesData={moviesData} />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies

