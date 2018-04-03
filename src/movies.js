import {doItAll} from './movies/main';

console.log('I am movies.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  doItAll();
});


