function multiply(a, b) {
  return a * b;
}

console.log(multiply(2)(3));

// multiply(2)(3)

const multiplyCurry = (a) => (b) => a * b;
console.log(multiplyCurry(4)(5));

// chaining
const multiplyChain = (a) => (b) => {};

// sumChain(1)(2)(3)(4)()
const sumChain = function (a) {
  return function (b) {
    if (b) {
      return sumChain(a + b);
    }
    return a;
  };
};

sumChain(1)(2)(3)(4)();

// mulChainChain(1)(2)(3)(4)()
const mulChain = function (a) {
  return function (b) {
    if (b) {
      return mulChain(a * b);
    }
    return a;
  };
};

mulChain(1)(2)(3)(4)();
