import {q} from '../../util';

export const addProductToList = (product) => {
  const list = q('#product-list');
  const clone = q('#product-mock').cloneNode(true);
  clone.removeAttribute('id');
  clone.firstElementChild.lastElementChild.innerText = 
  `${product.name} - ${product.calories}`;
  clone.style.display = 'block';
  list.appendChild(clone);
};