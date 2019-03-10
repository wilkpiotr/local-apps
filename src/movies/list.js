import {q, qAll} from '../util';

export const addMovieToList = (type, title, description) => {
  const movieContainer = q('#movies-list-content');
  const newMovie = document.createElement('div');
  newMovie.setAttribute('class', 'panel-block');
  newMovie.dataset.listItem = '';
  newMovie.dataset.title = title;
  newMovie.dataset.type = type;
  newMovie.textContent = `${title[0].toUpperCase()}${title.slice(1)}, ${type[0].toUpperCase()}${type.slice(1)}`;

  const newMovieDescription = document.createElement('p');
  newMovieDescription.style.display = "none"
  newMovieDescription.textContent = description;
  newMovie.appendChild(newMovieDescription)
  movieContainer.appendChild(newMovie);
};

export const filterMovies = () => {
  const moviesList = JSON.parse(localStorage.getItem('movies'));
  const select = q('#movie-type-search');
  const movieContainer = q('#movies-list-content');
  select.addEventListener('change', (e) => {
    movieContainer.innerHTML = '';
    moviesList.forEach((movie) => {
      if (e.target.value.toLowerCase() === 'all') {
        addMovieToList(movie.type, movie.title, movie.description) 
      }
      if (movie.type === e.target.value.toLowerCase().replace('-','')) {
        addMovieToList(movie.type, movie.title, movie.description)  
      };    
    })
  })
  
}