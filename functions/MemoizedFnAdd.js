let memoizeAdd = (m) => {
  console.log("m here....", m);
  let cache = {};
  return (n) => {
    console.log("n here .....", n);
    if (n in cache) {
      console.log("fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result:");
      let result = m + n;
      cache[n] = result;
      return result;
    }
  };
};
let newAdd = memoizeAdd(20);
newAdd(3);
newAdd(3);
