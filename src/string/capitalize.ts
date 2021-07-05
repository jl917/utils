/**
 * 字符串的第一个换大文字
 * @param {string} str - insert string
 * @returns {string}
 */
const capitalize = (str: string): string => {
  str = str.toLowerCase();
  return str.replace(str[0], str[0].toUpperCase());
};

export default capitalize;
