function outer() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}

let ol = outer();
ol();
ol();

let iife = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

iife();
iife();
iife();
