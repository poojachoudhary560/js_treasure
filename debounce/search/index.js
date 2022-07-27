let counter = 0;

const getData = () => {
  console.log("get data", counter++);
};

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    let context = this;
    console.log(context, args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(counter, args);
      fn.apply(context, args);
    }, delay);
  };
};

let betterFunction = debounce(getData, 500);
