
import {q, qAll} from '../../util';
import {getError} from './error';
import {initApp} from '../app/app';

export const bindHelloForm = () => {

  const helloSection = q('#hello');
  const appSection = q('#app');

  const nameInput = q('#hello-name');
  const caloriesInput = q('#hello-calories');
  const button = q('#hello-start');
  const error = getError();

  button.addEventListener('click', (e) => {
    if (isValid(nameInput.value, caloriesInput.value)) {
      // przechodzimy do nastepnej strony
      helloSection.style.display = 'none';
      appSection.style.display = 'block';
      error.hide();
      // inicjalizacja aplikacji!!!!!!!! bum!!!!!
      initApp(nameInput.value, caloriesInput.value);
    } else {
      error.show();
    }
  });
}

const isValid = (name, calories) => {
  const isNameValid = name.trim().length > 0;
  const isCaloriesValid = calories > 0;
  return isNameValid && isCaloriesValid;
}