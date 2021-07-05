const randomNumber = (min = 0, max = 1): number => {
  if (min >= max) {
    return max;
  }
  return Math.floor(Math.random() * (max - min) + min);
};

export default randomNumber;
