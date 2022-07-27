# Arrow Functions

- An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

- Differences & Limitations:

  - Does not have its own bindings to this or super, and should not be used as methods.
  - Does not have new.target keyword.
  - Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
  - Can not be used as constructors.
  - Can not use yield, within its body.

- Arrow functions used as methods
  - As stated previously, arrow function expressions are best suited for non-method functions. Let's see what happens when we try to use them as methods:

```
'use strict';

var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

- call, apply and bind

  - The call, apply and bind methods are NOT suitable for Arrow functions -- as they were designed to allow methods to execute within different scopes -- because Arrow functions establish "this" based on the scope the Arrow function is defined within.

  - the greatest benefit of using Arrow functions is with DOM-level methods (setTimeout, setInterval, addEventListener) that usually required some kind of closure, call, apply or bind to ensure the function executed in the proper scope.
