let x = function (_param) {
  this.getParam = function () {
    return _param;
  };
};

let x1 = new x(4);
console.log(x1.getParam());

function y(_param) {
  this.getParam = function () {
    return _param;
  };
}

let y1 = new y(6);
console.log(y1.getParam());
