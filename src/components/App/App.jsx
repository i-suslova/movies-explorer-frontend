import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const App = () => {
  //отслеживанем данные входа
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className='app'>
      <div>
        <Routes>
          <Route path='/' element={<Main loggedIn={isLoggedIn} />} />
          <Route path='/movies' element={<Movies loggedIn={isLoggedIn} />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile loggedIn={isLoggedIn} />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

    </div>
  );
}
export default App
