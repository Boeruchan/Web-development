/* Understanding let and const
vroeger is var

let = varibale values
const = constant values <-- mostly used

*/

/* Arrow Functions

function myFnc(this){
console.log(name)
};

-----

arrow function method, no more issues with the "this"keyword
const myFnc = (name) => {
console.log(name);
}

printMyName('Max');

-----

showrtest version of arrow functions
const multiply = number -> number * 2;
console.log(multiply: (2));
*/

/* Exports & Imports (modules)

// const numbers = [1, 2, 3,];
// const newNumbers = [...numbers, 4];

// console.log(newNumbers);

// const person = {
//   name: 'Max'
// };

// const newPerson = {
//   ...person,
//   age:28
// }

// console.log(newPerson);

// const filter = (...args) => {
// return args.filter(el => el ===1);
// }

// console.log(filter(1, 2, 3,));

// const numbers = [1, 2, 3];
// [num1, , num3] = numbers;
// console.log(num1, num3);

// const person = {
//   name: 'Max'
// };

// const secondPerson = {...person
//                      };

// person.name = 'Manu';

// console.log(secondPerson)

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers)
console.log(doubleNumArray);


*/