var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(stoleSecretIdentity.call(hero));
console.log(hero.getSecretIdentity());
var fn = stoleSecretIdentity.bind(hero);
console.log(fn());

function aa() {
  // return a; // a is not defined
  return this.a;
}

aa();
