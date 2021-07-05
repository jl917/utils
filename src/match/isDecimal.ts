/**
 * 匹配是否小数
 * @param {string} str - string
 * @param {string} type - all, upper, lower
 * @returns {boolean}
 */
export default (num: number): boolean => num % 1 !== 0;
