import {initApp} from './shop/app';

console.log('I am shop.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  initApp();
});