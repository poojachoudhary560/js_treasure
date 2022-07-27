function outer() {
  var counter = 0;
  return function () {
    counter += 1;
    console.log(counter);
    return counter;
  };
}

let inner = outer();
inner();
inner();
inner();

function outerFn() {
  let counter = 0;
  function inner() {
    counter += 1;
    console.log(counter);
  }
  inner();
  return counter;
}

let res = outerFn();
console.log(res);
