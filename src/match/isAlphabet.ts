/**
 * 匹配英文字母
 */

export default (str: string, type = 'all'): boolean => {
  if (type === 'upper') {
    return /^[A-Z]+$/.test(str);
  }
  if (type === 'lower') {
    return /^[a-z]+$/.test(str);
  }
  return /^[A-Za-z]+$/.test(str);
};
