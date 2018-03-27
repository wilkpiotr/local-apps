
import {q} from '../../util';
export const getError = () => {
  const error = q('#hello-error');
  return {
    show: () => {
      error.style.display = 'block';
      error.firstElementChild.innerText = 'Please insert correct values';
    },
    hide: () => {
      error.style.display = 'none';
      error.firstElementChild.innerText = '';
    }
  }
}

