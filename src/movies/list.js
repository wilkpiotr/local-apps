
export const addMovieToList = (type, title, description) => {
    const movieContainer = document.querySelector('#movies-list');
    const newMovie = document.createElement('div');
    newMovie.setAttribute('class', 'panel-block');
    newMovie.classList.add('list-item');
    newMovie.setAttribute('id', title);
    newMovie.innerText = title + ', ' + type;
    const newMovieDescription = document.createElement('span');
    newMovieDescription.setAttribute('id', title);
    newMovieDescription.style.display = "none"
    newMovieDescription.innerText = description;
    newMovie.appendChild(newMovieDescription)
    movieContainer.appendChild(newMovie);
  }