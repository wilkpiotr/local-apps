import {q, qAll} from '../util';

export const showMovieDetails = () => {
    const movieDetails = q('#movie-details');
    const movieContainer = q('#movies-list');
    const selectedMovieTitle = q('#movie-title')
    const selectedMovieDescription = q('.message-body')
    movieContainer.addEventListener('click', (e) => {
      if ('listItem' in e.target.dataset) {
        if (e.target.classList.contains('active')) {
          e.target.classList.remove('active');
          movieDetails.style.display = 'none';
        } else {
          const previous = document.querySelector('.active');
          if (previous) {
            previous.classList.remove('active');
          }
          selectedMovieTitle.textContent = e.target.dataset.title;
          selectedMovieDescription.textContent = e.target.firstElementChild.textContent;
          e.target.classList.add('active');
          movieDetails.style.display = "block";
        }
      }
    })
  }