// function declaration
function Car(color) {
    this.color = color;
}

// function expression
let Car1 = function(color) {
    this.color = color;
}

// In JS, function expression are preferred over function declaration
// because function expressions are not hoisted