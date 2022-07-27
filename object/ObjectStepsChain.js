let obj = {
  steps: 0,
  up: function () {
    this.steps++;
    return this;
  },
  down: function () {
    this.steps--;
    return this;
  },
  final: function () {
    return this.steps;
  },
};

obj.up().up().up().down().up().final();
