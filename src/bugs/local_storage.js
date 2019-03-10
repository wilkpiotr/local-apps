import {qAll} from '../util';
import {addBug} from './main';

export const saveBugsToLocalStorage = (type, description) => {
    let bugsArray = localStorage.getItem('bugs') ? JSON.parse(localStorage.getItem('bugs')) : [];
    bugsArray.push({'type': type, 'description': description});
    localStorage.setItem('bugs', JSON.stringify(bugsArray))
};

export const loadSavedBugs = () => {
    let bugs = JSON.parse(localStorage.getItem('bugs'));
    if (bugs) {
      bugs.forEach(bug => {
        addBug(bug.type, bug.description)
      })
    }
  };

export const updateStorage = () => {
    const bugsList = Array.from(qAll('li'));
    let updatedBugsArray = [];
    bugsList.forEach(bug => {
        if (bug.firstElementChild.textContent.trim() !== 'No bugs')
        updatedBugsArray.push({'type': bug.parentElement.id, 'description': bug.firstElementChild.textContent})
    })
    localStorage.setItem('bugs', JSON.stringify(updatedBugsArray))
}