// Object definition
// const user = {
//   name: "Gramsci",
//   lastName: "Hermozo",
//   id: 1234,
//   getName: function (param1) {
//     return param1 + " " + this.name;
//   },
// };

// console.log(user.name);
// console.log(user.lastName);
// console.log(user.getName("Hello"));

//for of Loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (elem of arr) {
//   console.log(elem);
// }

//Destrucring
let elm1 = arr[0];
let elm2 = arr[1];

let [el1, el2, , ...rest] = arr;
console.log(elm1);
console.log(elm2);

console.log(el1);
console.log(el2);
console.log(rest);

//Destrucring Object
let user = {
  name: "gramsci2",
  name: "Gramsci",
  lastName: "Hermozo",
  id: 1234,
  getName: function (param1) {
    return param1 + " " + this.name;
  },
};

const { id, name } = user;
console.log(name, id);

const obj = {
  p: "Some text",
  q: 1234,
};

const { p: parragraf, q: id2 } = obj;
console.log(parragraf, id2);

//Spread Operator (...)
let arr1 = [0, 1, 2, 3];
let arr2 = [4, 5, 6];

// [0,1,2,3,4,5, 6]
let arr3 = [];

for (val1 of arr1) {
  arr3.push(val1);
}

for (val2 of arr2) {
  arr3.push(val2);
}

console.log(arr3);

arr3 = [];
arr3 = arr1.concat(arr2);

console.log(arr3);

arr3 = [];

arr3 = [...[7, 8, 9], ...arr1, ...arr2];
console.log(arr3);

// Rest Parameters

function sum2(a, b, ...params) {
  let suma = a + b;
  for (val of params) suma += val;
  console.log(a, b, params, suma);
}

sum2(2, 3, 5, 6, 7, 9);

// Short circuiting
// &&
// ||
// ??

let name3;

if (name3 === undefined) {
  name3 = "defaul name";
}
