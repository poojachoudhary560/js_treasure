// The new.target pseudo-property lets you detect where a function or constructor is called using new operator.
// !undefined =>  true
// !!undefined => false

function Foo() {
  if (!new.target) {
    throw "Foo() must be called with new";
  }
  console.log("Foo intialted with new");
  console.log(new.target);
}

new Foo();
Foo();
