let Car = function (_color) {
  this.setColor = function (color) {
    _color = color;
  };
  this.getColor = function () {
    return _color;
  };
};

let redCar = new Car("red");
console.log(redCar);
console.log(redCar._color);
console.log(redCar.getColor());
redCar.setColor("orange");
console.log(redCar.getColor());
