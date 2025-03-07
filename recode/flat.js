function flat(arr, depth = 1) {
    if (!Array.isArray(arr)) return arr;
    if (depth === 0) return arr;
    
    return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
        acc = acc.concat(flat(val, depth - 1));
      } else {
        acc.push(val);
      }
      return acc;
    }, []);
  }