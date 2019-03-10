import {initApp} from './bugs/main'

console.log('I am bugs.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  
  initApp();
});



