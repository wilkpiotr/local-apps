import {q, qAll} from '../util';
import {loadSavedBugs, saveBugsToLocalStorage, updateStorage} from './local_storage';
import {checkFirstBug, noBugsInfo, isValid} from './small';


export const initApp = () => {
    loadSavedBugs();
  
    const addButton = q('#bug-add');
    addButton.addEventListener('click', (e) => {
      const bugType = q('#bug-type');
      const bugDescription = q('#bug');
      if (isValid(bugDescription.value)) {
        addBug(bugType.value, bugDescription.value);
        saveBugsToLocalStorage(bugType.value, bugDescription.value);
        };
    bugDescription.value = '';
    })
    moveBug();
};
  
export const addBug = (type, description) => {
    const bugsList = q(`#${type}`);
    const newBug = bugsList.firstElementChild.cloneNode(true);
    newBug.firstElementChild.textContent = description;
    bugsList.appendChild(newBug);
    const icons = Array.from(qAll(`#${type} > li .is-hidden`));

    icons.forEach(icon => {
        icon.classList.remove('is-hidden');
    });
    checkFirstBug(bugsList)
};
  
  
const moveBug = () => {
const section = q('section');
section.addEventListener('click', (e) => {
    const bugToMove = e.target.parentElement.parentElement;
    const idOfListToMoveBugFrom = e.target.parentElement.parentElement.parentElement.id;

    if (e.target.dataset.icon === 'angle-double-left' && idOfListToMoveBugFrom !== 'high') {
    bugToMove.parentElement.removeChild(bugToMove)
    let idOfListToMoveBugTo = idOfListToMoveBugFrom === 'low' ? 'middle' : 'high';
    const listToMoveBugTo = q(`#${idOfListToMoveBugTo}`);
    checkFirstBug(listToMoveBugTo);
    listToMoveBugTo.appendChild(bugToMove);
    noBugsInfo(idOfListToMoveBugFrom)
    } 
    else if (e.target.dataset.icon === 'angle-double-right' && idOfListToMoveBugFrom !== 'low') {
    bugToMove.parentElement.removeChild(bugToMove)
    let idOfListToMoveBugTo = idOfListToMoveBugFrom === 'high' ? 'middle' : 'low';
    const listThatBugMoveTo = q(`#${idOfListToMoveBugTo}`);
    checkFirstBug(listThatBugMoveTo);
    listThatBugMoveTo.appendChild(bugToMove);
    noBugsInfo(idOfListToMoveBugFrom)
    }
    else if (e.target.classList.contains('checkbox')) {
    bugToMove.parentElement.removeChild(bugToMove);
    noBugsInfo(idOfListToMoveBugFrom);
    }
    updateStorage();
});
};