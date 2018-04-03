console.log('I am bugs.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  addBug();
});

const addBug = (type, description) => {
  const bugDescription = document.querySelector('#bug');
  const addButton = document.querySelector('#bug-add')
  const bugType = document.querySelector('#bug-type');
  addButton.addEventListener('click', (e) => {
    if (bugType.value === 'high') {
      addHighBug();
    }
    if (bugType.value === 'middle') {
      addMediumBug();
    }
    if (bugType.value === 'low') {
      addLowBug();
    }
    bugDescription.value = '';
  })
};

const addHighBug = () => {
  const bugDescription = document.querySelector('#bug');
  const highBugsList = document.querySelector('#high');
  const newHighBug = highBugsList.firstElementChild.cloneNode(true);
  newHighBug.style.display = "block";
  newHighBug.innerText = bugDescription.value;
  highBugsList.appendChild(newHighBug);
  if (highBugsList.firstElementChild.innerText.trim() === 'No bugs' ) {
    highBugsList.removeChild(highBugsList.firstElementChild);
  }
}
const addMediumBug = () => {
  const bugDescription = document.querySelector('#bug');
  const mediumBugsList = document.querySelector('#middle');
  const newMediumBug = mediumBugsList.firstElementChild.cloneNode(true);
  newMediumBug.style.display = "block";
  newMediumBug.innerText = bugDescription.value;
  mediumBugsList.appendChild(newMediumBug);
  if (highBugsList.firstElementChild.innerText.trim() === 'No bugs' ) {
    highBugsList.removeChild(highBugsList.firstElementChild);
  }
}
const addLowBug = () => {
  const bugDescription = document.querySelector('#bug');
  const lowBugsList = document.querySelector('#low');
  const newLowBug = lowBugsList.firstElementChild.cloneNode(true);
  newLowBug.style.display = "block";
  newLowBug.innerText = bugDescription.value;
  lowBugsList.appendChild(newLowBug);
  if (highBugsList.firstElementChild.innerText.trim() === 'No bugs' ) {
    highBugsList.removeChild(highBugsList.firstElementChild);
  }
}