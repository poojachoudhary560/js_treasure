let animal = {}
animal.name = 'Leo'
animal.energy = 10;

animal.eat = function(amount) {
    this.energy += amount
}

animal.sleep = function(amount) {
    this.energy += amount
}

animal.play = function(amount) {
    this.energy -= amount
}