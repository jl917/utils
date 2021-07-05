// Support data type (Array, Set, Object, Map)
const shallowCopy = (a: any) => {
  // Set
  if (a?.constructor?.name === 'Set') {
    return new Set(a.values())
  }
  // Map
  if (a?.constructor?.name === 'Map') {
    const map = new Map();
    for (const [k, v] of a.entries()) {
      map.set(k, v);
    }
    return map;
  }
  // Array
  if (Array.isArray(a)) {
    return [...a];
  }
  // Object
  if (typeof a === 'object') {
    return { ...a }
  }
  return null;
};

export default shallowCopy;
