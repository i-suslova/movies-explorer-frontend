export const MAIN_API = 'https://api.isus.movies.nomoredomainsicu.ru';
export const MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';
export const MOVIES_API_URL = 'https://api.nomoreparties.co';

export const nameRegex = /^[а-яА-Яa-zA-Z\s-]{2,30}$/;
export const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
export const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

export const SHORT_FILM_DURATION = 40;

// количество фильмов на странице
export const MOVIES_PER_PAGE_LARGE = 16; // при широком экране
export const MOVIES_PER_PAGE_MEDIUM = 12; // при среднем экране
export const MOVIES_PER_PAGE_SMALL = 8; // при узком экране
export const MOVIES_PER_PAGE_MOBILE = 5; // при мобильном экране

// ширина экрана
export const SCREEN_WIDTH_LARGE = 1160; // для широкого экрана
export const SCREEN_WIDTH_MEDIUM = 866; // для среднего экрана
export const SCREEN_WIDTH_SMALL = 750; // для узкого экрана
export const SCREEN_WIDTH_MOBILE = 318; // для мобильного экрана

// количество карточек при нажатии на кнопку «Еще»
export const CARDS_PER_CLICK_LARGE = 4; // для широкого экрана
export const CARDS_PER_CLICK_MEDIUM = 3; // для среднего экрана
export const CARDS_PER_CLICK_MOBILE = 2; // для мобильного экрана

//вычисление длительности фильма
export const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
};

