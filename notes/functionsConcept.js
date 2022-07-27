var x = 1;
a();
b();

console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// o/p: 10 100 1

// how function invocation works behind the scenes?

/*

GEC - This GEC will be pushed to stack
MEMORY ----------- CODE
(VAR ENV)
x: undefined
a: fn{}
b: fn{}

MEMORY -----------CODE
x: 1  ----------- var x = 1
a: fn {} -----------EC is created
        MEMORY ------------ CODE
        x: 10 ----------var x = 10
        console.log(x) // local memory or EC as has value 10 so 10 ispushed to console
        Now this function is popped from callstack and control be go back to GEC

b: fn { } ------------- EC is created
        MEMORY --------- CODE
        1st phase
        x: undefined
        2nd phase, exec the code
        x: 100 --------- var x = 100;
        console.log(x) // 100 will be logged to console
        As we have finished executing the fn, this fn will be popped from stack
        and control go back to GEC

console.log(x)
// Now both fn EC were deleted and local GEC has x value as 1
// Now as nothing more is left to execute, even GEC is popped from callstack

CALLSTACK -- All GEC are kept here

EC of b
EC of a
GEC

*/
