import React from 'react'

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { saveMoviesData } from '../../utils/cardsMoviesData';
// import Preloader from '../Preloader/Preloader';

const SavedMovies = (props) => {
  const { loggedIn } = props;
  return (
    <main>
       <Header loggedIn={loggedIn} />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList moviesData={saveMoviesData} isSavedMovies={true} />
      </section>
      <Footer />
    </main>
  )
}

export default SavedMovies


