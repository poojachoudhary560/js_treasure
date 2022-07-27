let peopleProto = function() {

};

peopleProto.prototype.name = 'no name';
peopleProto.prototype.age = 0;
peopleProto.prototype.city = 'no city';

peopleProto.prototype.printPerson = function() {
    console.log(this.name + ' ' + this.age + ' ' + this.city);
}

let person6 = new peopleProto();
person6.printPerson();
console.log('name' in person6);
console.log(person6.hasOwnProperty('name'));

person6.name = 'Samuel';
person6.age = 38;
console.log('name' in person6);
console.log(person6.hasOwnProperty('name'));

person6.printPerson();