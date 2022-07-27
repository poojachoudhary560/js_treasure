// Example 1
// get aggregated sum of all object keys
// let ar = [{ name: 1, age: 2 },{ name: 1, age: 2 }, { name: 1, age: 2 },];
// o/p: { name: 3, age: 6 }

let ar = [
  { name: 1, age: 2 },
  { name: 1, age: 2 },
  { name: 1, age: 2 },
];

function getAggregatedData(ar) {
  let result = ar.reduce((acc, item) => {
    return {
      name: acc.name + item.name,
      age: acc.age + item.age,
    };
  });
  return result;
}

// Example
// sum of 1-5 using reduce
// o/p: 15
let sumAr = [2, 3, 4, 5];
function getAggregatedSum(ar) {
  let result = ar.reduce((acc, item) => {
    return acc + item;
  }, 1);
  return result;
}

getAggregatedSum(sumAr);

// Example
// Reduce Format:
// reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue);

// Example
// get max value using reduce
// i/o: [1,4,3,5,2]
// o/p: 5

function getMax(ar) {
  let result = ar.reduce((acc, item) => Math.max(acc, item));
  return result;
}

let maxAr = [1, 4, 3, 5, 2];
getMax(maxAr);

// Example
// Reduce Error Conditions
function calculateMax(prevVal, current) {
  return Math.max(prevVal, current);
}

console.log([50].reduce(calculateMax));
console.log([].reduce(calculateMax, 7));
console.log([].reduce(calculateMax)); // TypeError: Reduce an empty array with no initial value

// Example
// Sum of values in an object array
// i/p: let arrObj = [{x:1}, {x:2}, {x:3}]
// o/p: {x: 17}
let arrObj = [{ x: 1 }, { x: 2 }, { x: 3 }];

function calculateSumOfObjectArray(arrObj) {
  let result = arrObj.reduce(
    (acc, item) => {
      return {
        x: acc.x + item.x,
      };
    },
    { x: 11 }
  );
  return result;
}
calculateSumOfObjectArray(arrObj);

// o/p: 13
function calculateSumOfObjectArray2(arrObj) {
  let result = arrObj.reduce((acc, item) => {
    return acc + item.x;
  }, 7);
  return result;
}
calculateSumOfObjectArray2(arrObj);

// Example
// Flatten array of arrays
let flatArr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
function calculateFlattenedArray(acc, item) {
  return acc.concat(item);
}

flatArr.reduce(calculateFlattenedArray, [8]);

// Counting instance of values in array
let namesArr = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
function instanceCount(acc, item) {
  if (item in acc) {
    acc[item]++;
  } else {
    acc[item] = 1;
  }
  return acc;
}
namesArr.reduce(instanceCount, {});

// Group object by property
/* i/p:
[
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

result = {
  20: [
    { name: "Max", age: 20 },
    { name: "Jane", age: 20 },
  ],
  21: [{ name: "Alice", age: 21 }],
};
*/

let groupPeopleArray = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupObjectHelper(acc, item) {
  if (!acc[item.age]) {
    acc[item.age] = [];
  }
  acc[item.age].push(item);
  return acc;
}

groupPeopleArray.reduce(groupObjectHelper, {});

// Bonding array contained in array of objects using the spread  operator and initial value
// fiends - an array of objects
// where object field books is a lit of favorite books
let friendsArr = [
  {
    name: "anna",
    books: ["Harry Potter", "Invisible Man"],
    age: 21,
  },
  {
    name: "bob",
    books: ["War and Peace", "Invisible Man", "Romeo Juliet"],
    age: 21,
  },
  {
    name: "alice",
    books: ["Lord of the Rings", "the Shining"],
    age: 21,
  },
];

function booksListHelper(acc, item) {
  return [...acc, ...item.books];
}

let allBooks = friendsArr.reduce(booksListHelper, ["Alphabet"]);

// remove Duplicates in an array
let arrWithDuplicates = [
  "a",
  "b",
  "a",
  "b",
  "c",
  "e",
  "e",
  "c",
  "d",
  "d",
  "d",
  "d",
];
function filterDuplicateHelper(acc, item) {
  if (acc.indexOf(item) === -1) {
    acc.push(item);
  }
  return acc;
}

arrWithDuplicates.reduce(filterDuplicateHelper, []);

// Replace .filter().map() with reduce
// [-5, 6, 2, 0]
// o/p: [12, 4] // Doubled positive integers

let intArr = [-5, 6, 2, 0];
function doubledPositiveNumberHelper(acc, item) {
  if (item > 0) {
    acc.push(item ** 2);
  }
  return acc;
}
intArr.reduce(doubledPositiveNumberHelper, []);
