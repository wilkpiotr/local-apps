import {addMovieToList} from './list';
import {showMovie} from './details';

export const doItAll = () => {
    addMovie();
    showMovie();
}

const addMovie = () => {
    const addButton = document.querySelector('#bug-add');
    const movieType = document.querySelector('#movie-type');
    const movieTitle = document.querySelector('input.input')
    const movieDescription = document.querySelector('textarea.textarea')
    addButton.addEventListener('click', (e) => {
      addMovieToList(movieType.value, movieTitle.value, movieDescription.value)
      resetAddingSection(movieType, movieTitle, movieDescription);
    })
  }
  const resetAddingSection = (type, title, description) => {
    const movieType = document.querySelector('#movie-type');
    type.value = movieType.firstElementChild.value;
    title.value = '';
    description.value = '';
  }