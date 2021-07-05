/**
 * 匹配邮箱
 */

export default (str: string): boolean =>
  /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str) ||
  /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(str);
