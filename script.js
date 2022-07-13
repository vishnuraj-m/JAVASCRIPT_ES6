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