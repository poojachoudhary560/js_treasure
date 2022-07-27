# undefined vs not defined

- undefined vs not defined
  undefined is when some space is allocated in memory but value is not yet defined
  not defined is when variable is not declared as well

```
console.log(a)

var a = 7;

console.log(a)
```

- undefined is a placeholder for variable where memory is allocated but value is not defined

```
var a;
console.log(a);

if(a === undefined) {
    console.log('a is undefined')
} else {
    console.log('a is not undefined')
}
```

- JS is a losely typed language, that is it do not attach variable to its data type
  Eg a variable created with string can later be assigned a number or boolean

- Losely Typed language are also known as weakly typed language

# Scope and Lexical Environment

```
function a() {
    console.log(b) // here js tries to find b in local memory space
    // local memory space is in the EC of fn a
}
var b = 10;

a();

o/p: 10
```

```
function a() {
    c();
    function c() {
        console.log(b);
    }
}
var b = 10;

a();

o/p: 10
```

```
function a() {
    var b = 10;

    c();
    function c() {
        console.log(b);
    }
}

a();

o/p: 10
```

```
function a() {
    var b = 10;

    c();
    function c() {
    }
}

a();
console.log(b);


o/p: b is not defined
```

- Scope: where we can access specific variable or function in our code is scope
  -- what is the scope of variable b
  -- is b inside the scope

- Scope is directly dependent on visual environment

```
function a() {
    var b = 10;
    c();
    function c() {

    }
}

a();
console.log(b);

o/p: 10
```

GEC is created and pushed in callstack
memory ---------CODE
a: fn {}
Now as a is invoked, EC of a is created and pushed to callstack
memory -------- CODE
Phase 1
b: undefined
c: fn {}
Phase 2:
b: 10
c: fn {}
Now as fn c is getting invoked, a new EC is created
memory ---------- code

- Lexical Environment: where ever an EC is created, a Lexical Environment is also created.
  -- Lexical Environment is the local memory along with the lexical environment of the parent.
  -- lexical means in hierarchy
  -- eg c function is lexically inside a function
  and a is lexically inside global scope
  -- So whenever an EC is created, it has its local memory along with the lexical env of its parent
  -- lexical env of EC a() is the local memory along with lexical env of a's parent
  -- global also has a pointer to its lexical parent but as it does not have parent, it points to null
  -- And fn a in its lexical env points to global
  -- Also fn c points to the lexical env of a

```
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}

a();
console.log(b);

o/p: 10
```

here, when js tries to console.log(b); in fn a, it tries to find b in local memory of c. It will not find it as it does not exist there.
Now js engine goes to reference and goes to lexical env of fn c's parent which is a. So now it will try to find b in env of a. As b is found in a, it is printed to console.

Scope chain is a chain of lexical env and parent references.
If something is not found in local mem of EC, it goes to its lexical parent and check its local memory. If not found, then again it checks the reference of the lexical env of current EC and this chain continues.
If scope chain is exhausted, and still not found then var is not defined

# Temporal Dead Zone

- are let and const declarations hoisted in JS?
- syntax error vs reference error vs type error

- let and const declarations are hoisted. thats true
- they are in temporal dead zone for time being

```
console.log(b);  // no error -- undefined is logged
console.log(a); // cannot access a before intialization
let a = 10;
console.log(a) // 10
var b = 100;
```

- memory is allocated to these variables even before running a single line of code
- here a and b are allocated memory before running single line of code
- since b is of var it is allocated memory in global object. a is also allocated memory but stored in separated memory space than global
  thus a is stored on a different memory space and you cannot access this let and const declaration before you have initialized or put in some value in them

- Temporal dead zone is the time since when this let variable was hoisted and till it is initialized a value. The time between this is called temporal dead zone
- phase from hoisting till variable is assigned some value is called temporal dead zone and whenever we try to access some variable intemporal dead zone it gives a reference error
  Error: cannot accesss 'a' before intialization

- If we try to access some variable that does not exist in code, it gives Reference Error: x is not defined
- variable declared with var is stored in global space while var declared with let and const are stored in a different space
  Eg: window.b; this.b
  window.a; this.a;

- If a variable declated with let and a new variable with same is initialization once, it gives a syntax error: indefntifier 'a0 has already been declared'

- If a const is declared in one line and then initialized later, it gives Syntax Error: Missing initializer in const declaration

- If a const variable is assigned a value again, it gives typeError: assignment to constant varibale

# Block scope and shadowing in JS

- Block is defined by {}
- Block is also known as compound statement
- Block scope is what all variablees and functions we can access inside block

```
{
    var a=10;
    let b=20;
    const c=30;
}

```

- b and c are hoisted in a separate memory space called block
- a is hoisted in global scope

- shadowing

```
var a = 100;
{
    var a = 10;
}
```

here a is in global scope and a is initially 100 and they shadowed to 10

```
let b=100; // Script scope
{
    var a = 10; // Global Scope
    let b = 20; // Block scope
    const c = 30; // Block Scope
    console.log(b);
}
console.log(b);
```

- Scipt Scope is where let and const are hoisted and are stored here
- Shadowing works for all var let and const in block and function
- Illegal Shadowing

```
let a = 20;
{
    var a = 20;
} // Illegal Shadowing as var is crossing boundary of the scope

```

```
var a = 30;
{
    let a = 40;
} // Legal Shadowing
```

```
let a = 20;
function x() {
    var a = 30;
}
```

# Closures

```
function x() {
    var a=7;
    function y() {
        console.log(a); // 7
    }
    y();
}
x();
```

- This is a closure
- Closure is a function bundled with its lexical environment
- Fn along with its lexical scope/ env forms a closure

```
function x() {
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);

z();
```

```
function x() {
    var a=7;
    return function y() {
        console.log(a);
    }
}

var z = x();
console.log(z);
z();
```

```
function x() {
    var a=7;
    function y() {
        console.log(a); // 100 is printed
    }
    a=100;
    return y;
}
var z = x();
console.log(z);
z();
```

```
function z() {
    var b=900;
    function x() {
        var a=7;
        function y() {
            console.log(a,b);
        }
        y();
    }
    x();
}
z();
```

- Uses of closure:
  - Module design pattern
  - currying
  - functions like once
  - maintaining state in async world
  - setTimeouts
  - Iterators

# setTimeout and Closures

```
function x() {
    var i=1;
    setTimeout(function() {
        console.log(i);
    }, 1000);
    console.log('Print data here');
}
x();
```

```
function x() {
    for(var i=0; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
}
x();
//5 times 6
```

```
function x() {
    for(let i=0; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
}
// prints 1, 2, 3, 4, 5, 5 after each sec
```

- As let is blocked scope, so function passed to setTimeout is called with a new copy of variable. Each iteration will have new copy of i bound to it
- Each time function is called it is referring to different memory location which was a separate copy of i which were in the scope

```
// without using let we want to print 1,2,3,4,5,6
function x() {
    for(var i=1; i<=5; i++) {
        function close(i) {
            setTimeout(function() {
                console.log(i)
            }, i * 1000);
        };
        close(i);
    }
    console.log('Print text')
}
x();
```

```
function x() {
    for(var i=1; i<=5; i++) {
        function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000)
        }
        close(i);
    }
}
x();
```

```
function outer() {
    var a = 10;
    function inner() {
        console.log(a); // prints 10
    }
    return inner;
}
// outer()();
var close = outer();
close();
```

```
function outer() {
    function inner() {
        console.log(a); // prints 10
    }
    var a = 10;
    return inner;
}
var close = outer();
close();
```

```
function outer() {
    function inner() {
        console.log(a) // prints 10
    }
    let a = 10;
    return inner;
}
var close = outer();
close();
```

```
function outer(b) {
    function inner() {
        console.log(a, b);
    }
    let a = 10;
    return inner;
}
var close = outer('hello world');
close();
```

```
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a,b,c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
var close = outest()('helloworld');
close();
```

- Advantages
  - module pattern
  - function currying
  - higher order functions like memoise and once
  - data hiding and encapsulation

```
var counter = 0;

function incrementCounter() {
    counter++
}
// any code can increment counter here, its unsafe
```

```
function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}

console.log(count); // Reference err, count is not defined
var counter1 = counter();
counter1(); // 1
counter1(); // 2
var counter2 = counter();
counter(); // 1

```

```
function Counter() {
    var count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCountr = function() {
        count--;
        console.log(this.count);
    }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
```

- Disadvantages of closures
  - over consumption of memory. Sometimes the closed over variables are not garbage collected
  - it can also lead to memory leaks and can also freeze the browser
- Garbage Collector is a program in browser or JS engine that frees up the unutilized memory. JS is a higher level prog lang, most of garbage collecting work is done by JS engine

```
// relation between garbage collector and closures

function a() {
    var x = 0, z = 10;
    return function b() {
        console.log(x);
    }
}

var y = a();
y();
```

# First Class Functions

- Function Statement vs Function Expression vs Function Declaration

```
// Function Statement
function a() {
    console.log('a called');
}
a();

// Function Expression
var b = function() {
    console.log('b called');
}
b();
```

- difference bwtween function expression and function statemnet is hoisting as function expression acts as a variable, it is not hoisted

```
a();
b(); // Type Error, b is not defined
// Function statement aka Function Declaration
function a() {
    console.log('a called');
}

// function expression
var b = function() {
    console.log('b called');
}
```

```
// Function Declaration is same as function Statement
function a() {
    console.log('a called');
}

// Anonymous Function
// they are used in places where functions are used as values

function() {

} // Error as in function statements, name is required
```

```
// Named Function Expression
var b = function xyz() {
    console.log(xyz);
}
b();
xyz(); // Reference Err: xyz is not defined
```

-Difference between parameters and arguments - Parameters - identifiers defined in function definition - Arguments - values passed when function is called

```
// First Class Functions - First Class Citizens
the ability for functions to be used as values and can be passed as arguments to another fn and can be returned froma function is known as First class functions in JS
This ability of javascript fn to be used as values makes them first class citizens

var b = function(param1) {
    return function xyz() {

    }
}

console.log(b());

// Arrow functions


```

# Callback Functions and Event Listeners

- what is a callback function is in JS
  Callback fns are very powerful as they give us access to asynchronous world in a synchronous single threaded language JS

- JS is a synchronous and single threaded language

- Blocking the main thread

- Power of callbacks?

- Deep about event listeners

- Closures Demo with evenet listeners

- Scope demo with event listeners

- Garbage Collection and remove event listeners
