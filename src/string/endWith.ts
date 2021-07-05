/**
 * balabala
 * @param {string} str - insert string
 * @param {string} match - insert string
 * @returns {boolean}
 */
const endWith = (str: string, match: string): boolean => match === str.slice(0 - match.length);

export default endWith;
