console.log('JS');

let myName = 'Courtney';
console.log('My name is:', myName);

// let -- is a keyword - about to declare a variable
// myName -- is the name of the variable
// = -- assignment operator
// 'Courtney' -- value

let lastName = 'Azar';
console.log('My last name is:', lastName);

// Function to create full name taking in myName and lastName variables.
function fullName(x, y) {
    console.log('My full name is:', x, y);
}

fullName(myName, lastName);

// Expressions: code that evaluates to a single value
console.log('My name is: ' + myName + ' ' + lastName);

function add(n1, n2) {
    return n1 + n2;
}
let result = add(5, 7);
console.log('My result is:', result);

// if (8 > 7) {

// }

let isJamesBond = myName + ' ' + lastName === 'James Bond';
console.log(isJamesBond);

let aNumberMaybe = '23';

console.log(Number(aNumberMaybe) + 3);