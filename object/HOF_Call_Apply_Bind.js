var obj = { num: 2 };

var addToThis = function(a, b=1, c=1, d) {
    console.log(a + ' ' + b + ' ' + c + ' ' + d);
    return this.num +  a + b + c;
}

// Call Method
// It is used to call a method with the scope of the object that is
// passed to it
// function.call(object whose scope is required, parameters separated by comma)

// first para to call is the object whose scope call will run
// rest other params to call are params for the functions
console.log(addToThis.call(obj, 1));

// apply method
// function.apply(object whose scope is required, array of parameters);
var arr = [1,2,3];
console.log(addToThis.apply(obj, arr));

// bind
// creates a new function and binds the scope of the function to the object passed
var bound = addToThis.bind(obj);
bound(10);
