// create unique id from letters and numbers
const uniqueAlphaNumericId = (() => {
  const heyStack = '0123456789abcdefghijklmnopqrstuvwxyz';
  const randomInt = () => Math.floor(Math.random() * Math.floor(heyStack.length));

  return (length = 24) => Array.from({ length }, () => heyStack[randomInt()]).join('');
})();

export default uniqueAlphaNumericId;
