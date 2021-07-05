/**
 * html to textarea
 * @param {string} str - insert html(only support p tag)
 * @returns {string}
 */
const html2textarea = (str: string): string =>
  str.replace('</p><p>', '\n').replace('<p>', '').replace('</p>', '');

export default html2textarea;
