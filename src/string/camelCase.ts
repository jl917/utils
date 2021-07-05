/**
 * string to camel case
 * @param {string} str - insert string
 * @returns {string}
 */
const camelCase = (str: string): string => {
  let result = '';
  let isUpper = false;
  str = str.replace(/[^A-Za-z]/g, ' ').trim();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += isUpper ? str[i].toUpperCase() : str[i];
      isUpper = false;
    } else {
      isUpper = true;
    }
  }
  return result;
};

export default camelCase;
