/**
 * textarea to html
 * @param {string} str - insert html(only support p tag)
 * @returns {string}
 */

const textarea2html = (str: string): string => `<p>${str.replace(/\n/g, '</p><p>')}</p>`;

export default textarea2html;
