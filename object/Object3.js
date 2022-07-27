const animalMethods = {
    eat(amount) {
        this.energy += amount;
    },

    sleep(amount) {
        this.energy += amount;
    },

    play(amount) {
        this.energy -= amount;
    }
}

function Animal(name, energy) {
    let animal = {}
    animal.name = name;
    animal.energy = energy;
    animal.eat = animalMethods.eat;
    animal.sleep = animalMethods.sleep;
    animal.play = animalMethods.play;
    return animal;
}

let leo = Animal('Leo', 10);
let snoop = Animal('Snoop', 10);