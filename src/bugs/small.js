import {q} from '../util'

export const checkFirstBug = (ul) => {
    if (ul.firstElementChild.firstElementChild.textContent.trim() === 'No bugs') {
      ul.removeChild(ul.firstElementChild)
    }
  };
  
export const noBugsInfo = (id) => {
    const list = q(`#${id}`);
    const noBugLi = `<li>
        <p class="control has-icons-left is-inline">No bugs</p>
        <label>
        <input type="checkbox" class="checkbox is-hidden">
        </label>
        <span class="icon is-hidden">
        <i class="fas fa-angle-double-left" data-icon="left"></i>
        </span>
        <span class="icon is-hidden">
            <i class="fas fa-angle-double-right" data-icon="right"></i>
        </span>
    </li>`;
    if (list.children.length === 0) {
        list.innerHTML = noBugLi;
    }
};

export const isValid = (description) => {
    const isBugDescriptionValid = description.trim().length > 0;
    return isBugDescriptionValid;
}