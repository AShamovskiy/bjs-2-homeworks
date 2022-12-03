function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper (... args) {
    let hash = args.join(',');
    let hashInCache = cache.find((item) => item.hash === hash);
    
    if (hashInCache) {
      console.log(`Из кеша:${hashInCache.result}`);
      return `Из кеша:${hashInCache.result}`;
    }

    let result = func(...args);
    cache.push({hash, result});
    if (cache.length > 5) {
      cache.shift();
    };

    console.log('Вычисляем:' +result);
    return 'Вычисляем:' +result;
  };

  return wrapper
};


function debounceDecoratorNew(func, delay) {
  // Ваш код
  timerId = null;

  function wrapper (...args) {
    if (timerId) {
      clearTimeout(timerId)
    };

    wrapper.allCount++
    timerId = setTimeout(() => {
      wrapper.count++
      timerid = null;
      return func(...args)
    }, delay);
  };

  wrapper.count = [];
  wrapper.allCount= [];
  return wrapper;
};