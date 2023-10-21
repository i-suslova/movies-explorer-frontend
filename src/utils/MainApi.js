import { MAIN_API, MOVIES_API } from './constants'
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }


  _correctServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);

  }

  // универсальный метод для отправки запроса
  _request(endpoint, options) {
    return fetch(`${this._baseUrl}/${endpoint}`, options).then(
      this._correctServerResponse
    );
  }

  // настраиваем авторизацию
  setAuthorization(token) {
    this._headers['authorization'] = `Bearer ${token}`;
  }

  //запрос для проверки валидности токена
  getToken(token) {
    return this._request("users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  register(name, email, password) {
    return this._request("signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  }

  login(email, password) {
    return this._request("signin", {
      password: password,
      email: email,
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    });
  }

  getUserInfo() {
    return this._request("users/me", {
      headers: this._headers,
    });
  }

  getMovies() {
    return this._request("movies", {
      headers: this._headers,
    });
  }

  editUserId(name, email) {
    return this._request("users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      })
    });
  }

  saveMovie(movie) {
    return this._request("movies", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_API}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU || movie.nameEN,
        nameEN: movie.nameEN || movie.nameRU,
      }),
    });
  }


  deleteMovie(movieId) {
    return this._request(`movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

}

const mainApi = new Api({
  baseUrl: MAIN_API,
  headers: {
    "Content-Type": "application/json",
    authorization: '',
  },
});

export default mainApi





















