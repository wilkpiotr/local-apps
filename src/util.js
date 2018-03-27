/**
 * 
 * @param {string} selector 
 * @returns {Element}
 */
export const q = (selector) => {
  return document.querySelector(selector);
}
/**
 * 
 * @param {string} selector 
 * @returns {NodeList}
 */
export const qAll = (selector) => {
  return document.querySelectorAll(selector);
}