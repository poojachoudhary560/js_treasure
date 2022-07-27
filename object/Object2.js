function Animal(name, energy) {
    let animal = {};
    animal.name = name;
    animal.energy = energy;

    animal.eat = function(amount) {
        energy += amount;
    }

    animal.sleep = function(amount) {
        energy += amount;
    }

    animal.play = function(amount) {
        energy -= amount;
    }
    return amount;
}

let leo = Animal('Leo', 7);
let snoop = Animal('Snoop', 7);