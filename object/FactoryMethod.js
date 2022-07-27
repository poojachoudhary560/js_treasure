var peopleFactory = function(name, age, state) {
    var temp = {};
    temp.name = name;
    temp.age = age;
    temp.state = state;
    temp.test = this; // window object
    temp.printPerson = function() {
        console.log(this); // temp scope
        console.log(this.name + ' ' + this.age + ' ' + this.state);
    }
    return temp;
}

var person1 = peopleFactory('John', 23, 'CA');
console.log(person1.test);
var person2 = peopleFactory('Johny', 28, 'SC');

person1.printPerson();
person2.printPerson();
