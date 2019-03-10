import {addMovieToList} from './list'

export const saveMoviesToLocalStorage = (type, title, description) => {
    let moviesArray = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
    moviesArray.push({'type': type,'title': title, 'description': description});
    localStorage.setItem('movies', JSON.stringify(moviesArray))
}

export const loadSavedMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
        movies.forEach(movie => {
        addMovieToList(movie.type, movie.title, movie.description)
      })
    }
  };