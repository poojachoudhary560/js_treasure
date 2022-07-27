var obj = {
  count: 10,
  doSomethingLater: function () {
    console.log("this.count ", this.count);
    setTimeout(function () {
      this.count++;
      console.log("incremented count ", this.count, this);
    }, 1000);
  },
};
console.log("-------- function() in setTimeout ---------");
obj.doSomethingLater();

var obj1 = {
  input: 20,
  doSomethingLater: function () {
    console.log("this.input ", this.input);
    setTimeout(() => {
      this.input++;
      console.log("incremented this.input ", this.input);
    }, 1000);
  },
};

console.log("-------- Arrow function() in setTimeout ---------");
obj1.doSomethingLater();

// passing scope to timer callback function
let obj3 = {
  myVal: 33,
  doSomethingLater: function () {
    console.log("this.myVal ", this.myVal);
    let _self = this;
    setTimeout(function () {
      console.log("_self", _self, this);
      _self.myVal++;
      console.log("incremented myVal", _self.myVal);
    }, 1000);
  },
};

console.log(
  "-------- function() in setTimeout with _self scope passed ---------"
);
obj3.doSomethingLater();

let obj4 = {
  t1: 28,
  doSomethingLater: () => {
    console.log("this.t1 ", this.t1); // undefined
    setTimeout(() => {
      // console.log()
    }, 1000);
  },
};

obj4.doSomethingLater();
