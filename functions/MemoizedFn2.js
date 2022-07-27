let add = (n) => n + 10;

let memoizedFn = (fn) => {
  let cache = {};
  // console.log(args)
  return (...args) => {
    console.log(args);
    let n = args[0];
    if (n in cache) {
      console.log("fetching in cache");
      return cache[n];
    } else {
      console.log("calculating result");
      let res = fn(n);
      cache[n] = res;
      return res;
    }
  };
};

let newFn = memoizedFn(add);
newFn(10);
newFn(10);
