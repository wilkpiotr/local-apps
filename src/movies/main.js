import {q, qAll} from '../util'
import {addMovieToList, filterMovies} from './list';
import {showMovieDetails} from './details';
import {isValid} from './valid';
import {saveMoviesToLocalStorage, loadSavedMovies} from './local_storage';

export const bindMovies = () => {
  loadSavedMovies();
  addMovie();
  showMovieDetails();
  filterMovies();
}

const addMovie = () => {
    const addButton = q('#bug-add');
    const movieType = q('#movie-type');
    const movieTitle = q('input.input')
    const movieDescription = q('textarea.textarea')
    addButton.addEventListener('click', (e) => {
      if (isValid(movieType.value, movieTitle.value, movieDescription.value)) {
      addMovieToList(movieType.value, movieTitle.value, movieDescription.value);
      saveMoviesToLocalStorage(movieType.value, movieTitle.value, movieDescription.value)
      clearForm(movieType, movieTitle, movieDescription);
      }
    })
  }
  const clearForm = (type, title, description) => {
    const movieType = q('#movie-type');
    type.value = movieType.firstElementChild.value;
    title.value = '';
    description.value = '';
  }