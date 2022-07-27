- Everything in JS happens inside Execution Context
  It has 2 components: Memory and Code

  - Memory Component or Variable Environment
    All variables and functions are stored here in key value pairs
  - Code Component or Thread of Execution
    Here whole code is executed one line at a time

- JS is a synchronous single threaded language

- What happens when you run JS code?
  An Execution Context is created

```
var n = 2;
function square(n) {
    var ans = num * num;
    return ans;

}
var square2 = square(n);
var square4 = square(4);
```

```
EC
Phase 1
Memory -------- Code
n: undefined
square: fn{...}
square2: undefined
square4: unefined
```

- EC is created in 2 phase.
  The first phase is called the creation phase.
  It is also called the memory creation phase.
  In first phase, it allocates memory to all variables and functions.
  The second phase is the code execution phase.

```
Phase 2
Memory -------- Code
n: 2
square: fn{...}
square2: undefined // Function Invocation creates a new EC
Phase 1
MEMORY -------- CODE
num: undefined
ans: undefined
Phase 2
num: 2
ans: 4 return keyword here

square4: undefined
```

- When a function is invoked in JS, a new execution context E1 is created.
  In fn, return keyword tells the function to return the control of the program to where the function was invoked.
  Also the execution context E1 gets deleted.

- To manage creation of EC, JS uses callstack.
  At the bottom of this stack is GEC.
  when a function is invoked or new EC is created, it is pushed in stack, say E1
  one we are done with execution of function E1 is pooed out and control goes back to GEC
  Callstack is only for managing Execution Context
  After the complete code is executed, GEC is also popped out

- Callstack maintains the order of execution of execution contexts

- Callstack other names
  - Execution Context Stack
  - Program Stack
  - Control Stack
  - Runtime Stack
  - Machine Stack
