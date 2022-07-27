var peopleDynamicProto = function(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
    console.log(typeof this.printPerson);
    if(typeof this.printPerson !== 'function') {
        peopleDynamicProto.prototype.printPerson = function() {
            console.log(this.name + ' ' + this.age + ' ' + this.state);
        };
    }
};
var person8 = new peopleDynamicProto('PC', 27, 'JP');
var person9 = new peopleDynamicProto('PA', 18, 'JP');
var person10 = new peopleDynamicProto('AA', 29, 'DL');
person8.printPerson();
person9.printPerson();
person10.printPerson();

console.log('name' in person8);
console.log(person8.hasOwnProperty('name'));