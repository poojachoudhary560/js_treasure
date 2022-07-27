var peopleConstructor = function (name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function () {
    return this.name + " " + this.age + " " + this.state;
  };
};

peopleConstructor.prototype.printData = function () {
  console.log("name is " + this.name);
  return "hello";
};

var person1 = new peopleConstructor("Joy", 25, "IN");
console.log(person1.printData());
person1.printPerson();

// Employee Constructor
function Employee(id, dept) {
  this.id = id;
  this.dept = dept;
}
Employee.prototype.printEmployee = function () {
  return this.id + " " + this.dept;
};

let emp1 = new Employee(102, "Sales");
emp1.printEmployee();
