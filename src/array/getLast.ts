const lastItem = (list: any[]) => {
  if (list.length === 0) {
    throw 'list is empty array'
  }
  return list[list.length - 1]
};
export default lastItem;
