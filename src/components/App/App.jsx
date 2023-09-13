import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Импортируйте компоненты страниц
import AboutPage from './components/AboutPage';
import MoviesPage from './components/MoviesPage';
import SavedMoviesPage from './components/SavedMoviesPage';
import ProfilePage from './components/ProfilePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Логотип</Link>
        <Link to="/movies">Фильмы</Link>
        <Link to="/saved-movies">Сохранённые фильмы</Link>
        <Link to="/signup">Регистрация</Link>
        <Link to="/signin">Авторизация</Link>
        <Link to="/profile">Аккаунт</Link>
      </header>
      <Switch>
        <Route path="/" exact component={AboutPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/saved-movies" component={SavedMoviesPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
