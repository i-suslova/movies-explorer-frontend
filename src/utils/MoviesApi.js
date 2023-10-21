import { MOVIES_API } from './constants'
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // Проверка ответа сервера на корректность
  _correctServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status} ${res.statusText}`));
  }

  // Универсальный метод для отправки GET-запроса
  _getRequest(url) {
    return fetch(url, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._correctServerResponse);
  }

  // Получаем список всех фильмов в виде массива (GET-запрос)
  getInitialMovies() {
    return this._getRequest(`${this._baseUrl}`);
  }
}

const moviesApi = new Api({
  baseUrl: MOVIES_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;

