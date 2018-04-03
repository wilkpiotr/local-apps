
export const showMovie = () => {
    const movieDetails = document.querySelector('#movie-details');
    const movieContainer = document.querySelector('#movies-list');
    const selectedMovieTitle = document.querySelector('#movie-title')
    const selectedMovieDescription = document.querySelector('.message-body')
    movieContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('list-item')) {
        selectedMovieTitle.innerText = e.target.id;
        selectedMovieDescription.innerText = e.target.firstElementChild.innerText;
        movieDetails.style.display = "block";
      }
      else {
        return;
      }
    })
  }