// Support data type (Array, Set, Object, Map)
const shallowDiff = (a: any, b: any) => {
  // Set
  if (a?.constructor?.name === 'Set') {
    if (b?.constructor?.name === 'Set') {
      if (a.size !== b.size) {
        return false;
      }
      for (const v of a) {
        if (!b.has(v)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  // Map
  if (a?.constructor?.name === 'Map') {
    if (b?.constructor?.name === 'Map') {
      if (a.size !== b.size) {
        return false;
      }
      for(let k of a.keys()){
        if(a.get(k) !== b.get(k)){
          return false
        }
      }
      return true;
    }
    return false;
  }
  // Array
  if (Array.isArray(a)) {
    if (Array.isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  // Object
  if(typeof a === 'object'){
    if(typeof b === 'object'){
      for (const k of Object.keys(a)) {
        if (a[k] !== b[k]) {
          return false;
        }
      }
      return true
    }
    return false
  }

  return false;
};

export default shallowDiff;
