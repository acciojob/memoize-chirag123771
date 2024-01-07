function memoize(callback, resolver = JSON.stringify) {
    const cache = new Map();

  const memoized = (...args) => {
    const key = resolver ? resolver(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = callback(...args);
    cache.set(key, result);

    return result;
  };

  memoized.clear = () => {
    cache.clear();
  };

  memoized.delete = (...args) => {
    const key = resolver ? resolver(...args) : JSON.stringify(args);
    cache.delete(key);
  };

  memoized.has = (...args) => {
    const key = resolver ? resolver(...args) : JSON.stringify(args);
    return cache.has(key);
  };

  return memoized;
  }
  
  module.exports = memoize;
  
