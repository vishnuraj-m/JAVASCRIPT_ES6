function great(Name = 'Vishnu') {
    console.log('hi ' + Name);
}
great();


const great1 = function (Name = 'Vishnu') {
    console.log('hi ' + Name);
}
great1();

// !arrow Function
const add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(1, 3));

const addArrow = (a = 0, b = 0) => {
    return a + b;
}
console.log(addArrow(10, 3));

// *arrow Function one line
const addArrow1 = (a = 5, b = 7) => a + b;
console.log(addArrow1(10, 5));

// !arrow function in map

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((item) => item);
console.log(arr2);

const sum = arr.reduce((a, b) => a + b)
console.log(sum);


// !Object
const car = {
    make: "Volkswagen",
    model: 'T-ROC',
    move: function () {
        console.log(this);
    },
    // !don't use arrow key word in this
    move1: () => {
        console.log(this);
    }
}
car.move();
car.move1();

// !don't use arrow key word in factory function

const Car = (mode, make) => {
    this.make = make
    this.model = model
}

const Car1 = new Car('BMW', 'X5');
console.log(Car1)