import {q} from '../../util';
import {addProductToList} from './list';
import {isValid} from '../hello/hello';
import {getError} from '../hello/error';
const setUserNameInHTML = (name) => {
  const nameSpan = q('#user-name-label');
  nameSpan.innerText = name;
}

const setCaloriesCounterInHTML = (calories) => {
  const caloriesSpan = q('#calories-counter');
  caloriesSpan.innerText = '0 / '+calories+ 'kcal'
}

const bindAddProductForm = () => {
  const eatButton = q('#food-eat');
  const productName = q('#food');
  const productCalories = q('#calories');
  const error = getError();

  eatButton.addEventListener('click', () => {
    const name = productName.value;
    const calories = productCalories.value;
    // powinna byc walidacja
    if (isValid(name, calories)) {
      // czyszczenie pol
      productName.value = '';
      productCalories.value = ''
      // dodanie do listy
      addProductToList({name: name, calories: calories});
    } else error.show()

  });
}

export const initApp = (name, calories) => {
  setUserNameInHTML(name);
  setCaloriesCounterInHTML(calories);
  bindAddProductForm();
}