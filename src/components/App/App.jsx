import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, } from "react-router-dom";


import './App.css';

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
// import useServerResponse from '../../hooks/useServerResponse';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';



const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = useLocation().pathname;

  //данные текущего пользователя
  const [currentUser, setCurrentUser] = useState({});
  //отслеживанем данные входа
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //отслеживаем авторизацию
  const [tokenChecked, setTokenChecked] = useState(false);
  //сохраняем массив фильмов
  const [moviesData, setMoviesData] = useState([]);
  //сохраняем массив фильмов, сохраненных пользователем
  const [savedMovies, setSavedMovies] = useState([]);
  //сохраняем массив загруженных фильмов
  const [downloadedMovies, setDownloadedMovies] = useState(false);
  //отслеживанияем статус загрузки, Preloader
  const [isLoading, setIsLoading] = useState(true);
  //отслеживанияем статус информации для пользователя
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorHandled, setIsErrorHandled] = useState(false);
  const [isSuccessResponse, setIsSuccessResponse] = useState(false);

  const handleError = (err, component) => {
    setIsErrorHandled(true);
    if (component === 'register') {
      if (err.includes('409')) {
        setErrorMessage('Пользователь с таким email уже существует.');
      } else {
        setErrorMessage('При регистрации пользователя произошла ошибка.');
      }
    } else if (component === 'login') {
      if (err.includes('401')) {
        setErrorMessage('Вы ввели неправильный логин или пароль.');
      } else if (err.includes('При авторизации произошла ошибка. Токен не передан или передан не в том формате.')) {
        setErrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате.');
      } else {
        setErrorMessage('При авторизации произошла ошибка. Переданный токен некорректен.');
      }
    } else if (component === 'editUserId') {
      if (err.includes('409')) {
        setErrorMessage('Пользователь с таким email уже существует.');
      } else {
        setErrorMessage('При обновлении профиля произошла ошибка.');
      }
    } else if (err.includes('500')) {
      setErrorMessage('На сервере произошла ошибка. На дисплее возникла ошибка.');
    } else if (err.includes('404')) {
      setErrorMessage('Страница по указанному маршруту не найдена.');
    } else {
      setErrorMessage('Что-то пошло не так. Попробуйте позже');
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("JWT")) {
      setIsLoggedIn(false);
      return;
    }
    setIsLoading(true);
    const setAuthorization = (token) => {
      mainApi.setAuthorization(token);
    };
    const getAllData = async () => {
      try {
        setAuthorization(localStorage.getItem("JWT"));
        const [userData, savedMovies] = await Promise.all([
          mainApi.getUserInfo(),
          mainApi.getMovies(),
        ]);
        setCurrentUser(userData);
        setSavedMovies(savedMovies.reverse());
        setDownloadedMovies(true);

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllData();
  }, [isLoggedIn, downloadedMovies]);

  useEffect(() => {
    const JWT = localStorage.getItem("JWT");

    if (JWT) {
      mainApi
        .getToken(JWT)
        .then(() => {
          setIsLoggedIn(true);
          navigate(path, { replace: true });
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
        });
      } else {
        setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const updateUserAndToken = (userDataAndToken) => {
    localStorage.setItem("JWT", userDataAndToken.token);
    mainApi.setAuthorization(userDataAndToken.token);
    setCurrentUser({ ...userDataAndToken.user });
    setIsLoggedIn(true);
  };

  const handleRegister = ({ name, email, password }) => {
    // setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then(() => mainApi.login(email, password))
      .then(updateUserAndToken)
      .then(() => {
        setIsErrorHandled(false);
        setIsSuccessResponse(true)
      })
      .catch((err) => {
        handleError(err, 'register');
        console.error("Ошибка регистрации:", err);
        // setIsRegistrationStatus(false);
      })
    // .finally(() => {
    //   // setIsInfoTooltipOpen(true);
    //   // setIsLoading(false);

    // });
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then(updateUserAndToken)
      .then(() => {
        setIsLoading(true);
        setMoviesData([]);
        navigate('/movies')
      })
      .catch((err) => {
        console.error("Ошибка входа в систему:", err);
        handleError(err, 'login');
        // setIsRegistrationStatus(false);
      })
      .finally(() => {
        // setIsInfoTooltipOpen(true);
        setIsLoading(false);
      });
  };

  // универсальная функция для обработки запросов
  const handleSubmit = (request, component) => {
    request()
      .then(() => {
        setIsErrorHandled(false);
        setIsSuccessResponse(true)
      })
      .catch((err) => {
        handleError(err, component);
        console.error(err);
      });
  };

  const handleEditUserId = ({ name, email }) => {
    const makeRequest = () => {
      return mainApi.editUserId(name, email)
        .then(setCurrentUser);
    };
    handleSubmit(makeRequest, 'editUserId');
  };

  const handleSaveMovie = (movie) => {
    handleSubmit(() => {
      return mainApi
        .saveMovie(movie)
        .then((savedMovie) => {
          setSavedMovies((prevSavedMovies) =>
          [...prevSavedMovies, savedMovie]);
        })

        .catch((error) => {
          setIsErrorHandled(true);
          setIsSuccessResponse(false);
          console.error("Ошибка загрузки фильма:", error);
        });
    });
  };

  const handleDeleteMovie = (movieId) => {
    handleSubmit(() => {
      return mainApi.deleteMovie(movieId)
        .then(() => {
          setSavedMovies((prevSavedMovies) =>
          prevSavedMovies.filter(movie => movie._id !== movieId));
        })
        .catch((error) => {
          setIsErrorHandled(true);
          setIsSuccessResponse(false);
          console.error("Ошибка удаления фильма:", error);
        });
    }
    );
  };

  const clearUserData = () => {
    localStorage.removeItem('JWT');
    localStorage.removeItem('searchResults');
    localStorage.removeItem('searchText');
    localStorage.removeItem('isShortFilm');
  };
  const handleSignOut = () => {

    clearUserData();
    setIsLoggedIn(false);
    mainApi.setAuthorization(false);
    setCurrentUser({});
    setSavedMovies([]);
    navigate("/");
  };

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>

        <div>
          <Routes>

            <Route
              path='/'
              element={<Main
                loggedIn={isLoggedIn}
              />}
            />

            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={isLoggedIn}
                  setMoviesData={setMoviesData}
                  moviesData={moviesData}
                  savedMovies={savedMovies}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  setSavedMovies={setSavedMovies}
                />}
            />

            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={isLoggedIn}
                  setSavedMovies={setSavedMovies}
                  savedMovies={savedMovies}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />}
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={isLoggedIn}
                  onUpdateUser={handleEditUserId}
                  onSignOut={handleSignOut}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  isSuccessResponse={isSuccessResponse}
                  setIsSuccessResponse={setIsSuccessResponse}
                />}
            />

            <Route
              path='/signup'
              element={
                <Register
                  loggedIn={isLoggedIn}
                  onRegistration={(name, email, password) => handleRegister({ name, email, password })}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  isSuccessResponse={isSuccessResponse}
                  setIsSuccessResponse={setIsSuccessResponse}
                />}
            />

            <Route
              path='/signin'
              element={
                < Login
                  onLogin={(email, password) => handleLogin({ email, password })}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />}
            />

            <Route
              path='*'
              element={
                <NotFoundPage
                  to="/signin" replace
                />}
            />

          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App

