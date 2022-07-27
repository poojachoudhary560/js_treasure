var Pen = function(col) {
    if(!new.target) return 'Pen() must be called with new';
    this.col = col
};

// let bluePen11 = Pen('blue');
let bluePen = new Pen('blue light');
let pinkPen = new Pen('pink');

// console.log(bluePen11);
console.log(bluePen);
console.log(pinkPen);
console.log(window.col);