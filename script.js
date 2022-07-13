// function great(Name = 'Vishnu') {
//     console.log('hi ' + Name);
// }
// great();


// const great1 = function (Name = 'Vishnu') {
//     console.log('hi ' + Name);
// }
// great1();

// !arrow Function
// const add = function (a = 0, b = 0) {
//     return a + b
// }
// console.log(add(1, 3));

// const addArrow = (a = 0, b = 0) => {
//     return a + b;
// }
// console.log(addArrow(10, 3));

// *arrow Function one line
// const addArrow1 = (a = 5, b = 7) => a + b;
// console.log(addArrow1(10, 5));

// !arrow function in map

// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.map((item) => item);
// console.log(arr2);

// const sum = arr.reduce((a, b) => a + b)
// console.log(sum);


// !Object
// const car = {
//     make: "Volkswagen",
//     model: 'T-ROC',
//     move: function () {
//         console.log(this);
// },
// !don't use arrow key word in this
//     move1: () => {
//         console.log(this);
//     }
// }
// car.move();
// car.move1();

// !don't use arrow key word in factory function

// const Car = (mode, make) => {
//     this.make = make
//     this.model = model
// }

// const Car1 = new Car('BMW', 'X5');
// console.log(Car1)


// !array destructuring

const array = ['a', 'b', 'c'];
const var1 = array[0];
const var2 = array[1];
const var3 = array[2];

console.log(var1, var2, var3);

const [variable1, variable2, variable3] = array;
console.log(variable1, variable2, variable3);


// *Object Destructuring
const car = {
    brand: 'BMW',
    model: 'X-7',
    year: '2022',
    color: 'black',
    engine: 'V8',
    transmission: 'Automatic',
    wheels: '4',
    seats: '5',
    doors: '4'
}

// const newObj = {
//     brand: car.brand,
//     color: car.color,
//     model: car.model
// }

// console.log(newObj)

const { model, brand: company, color } = car;  //!change name
console.log(model, company, color)



const tv = {
    brand: 'Samsung',
    type: {
        display: '4K',
        type: 'LED',
        size: '63'
    }
}

const { type: { display: textDisplay } } = tv; //!change name
console.log(textDisplay);


// !spreading an array
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6];

console.log(arr1);
console.log(arr2);
console.log(...arr1);
console.log(...arr2);
console.log([...arr1, ...arr2]);


// !spreading an object

const bus = {
    brand: 'volvo'
}

const engine = {
    type: 'turbo'
}

console.log({ ...bus, ...engine })

// !template

const Name = 'Vishnu';
const age = 30;

console.log(`${Name} is ${age} years old`);
console.log(`${Name} is ${age > 20 ? 'Old' : 'Young'}  years old`);