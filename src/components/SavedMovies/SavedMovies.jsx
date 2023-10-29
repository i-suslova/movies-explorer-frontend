import React from 'react'

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import filterMovies from '../../utils/filterMovies';
// import Preloader from '../Preloader/Preloader';

const SavedMovies = (props) => {
  const { loggedIn, savedMovies, onDeleteMovie  } = props;

  return (
    <main>
      <Header loggedIn={loggedIn} />
      <section className='movies'>
    
      <SearchForm  />

        <MoviesCardList
          savedMovies={savedMovies}
          isSavedMovies={true}
          onDeleteMovie={onDeleteMovie}
        />

      </section>
      <Footer />
    </main>
  )
}

export default SavedMovies


