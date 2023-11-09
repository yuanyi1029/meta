// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy () {
    for (var elem of dairy) {
        console.log(elem)
    }
}

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (var elem of Object.keys(bird)) {
        console.log(elem + ": " + bird[elem])
    }
}

// Task 3
function animalCan() {
    for (var elem in bird) {
        console.log(`${elem}: ${bird[elem]}`)
    }
}

animalCan()