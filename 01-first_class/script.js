// let a = 2;

// console.log(a);

// const NAME = "GHC";
// console.log(NAME);

// let firstName = "Gramsci";
// let age = null; // empty string "" zero 0 (starting value)

// let b = 3;

// console.log(a > b);
// a = a + 2;
// console.log(a);

// a += 6;
// console.log(a);

// a -= 2;
// console.log(a);

// a++;
// console.log(a);
// a--;
// console.log(a);

// console.log(12 == 12);

// function getName(param1) {
//   return param1 + "Gramsci";
// }

// console.log(getName("Hello "));

// const getAge = function () {
//   return 30;
// };

// console.log(getAge());

// const getLastName = (param2) => {
//   return param2 + "Hermozo";
// };

// console.log(getLastName("Gramsci "));

// function something() {
//   return "other thing";
// }

// let num1 = 2;
// let num2 = "2";

// if (num1 === num2) {
//   console.log("Same numbers");
// } else {
//   console.log("Different numbers");
// }

// let myVar;

// if (myVar === undefined) {
//   console.log("The variable is undefined");
// } else {
//   console.log("deffined variable");
// }

// for (let i = 0; i < arr.length; i++) {
//   // console.log(typeof arr[i]);
//   if (typeof arr[i] === "string") {
//     console.log(arr[i]);
//   }
// }

// let a = 2;
// let b = "2";

// console.log(a === b);

let arr = ["GHC", "Jaime", "Jose"];

arr.push(2, 4, "Marcelo", 5);

console.log(arr);

arr.pop();

console.log(arr);

arr.unshift(1, "2", "3");

console.log(arr);

arr.shift();
arr.shift();

console.log(arr);

console.log(arr.indexOf("Jaime"));

if (arr.includes("Jaime")) {
  console.log("Jaime is in the list");
} else {
  console.log("Jaime is not in the list");
}
let index = 4;
let newValue = "New Value";
let arrAux = [];
for (let i = 0; i < arr.length; i++) {
  if (i === index) {
    arrAux.push(newValue);
  }
  arrAux.push(arr[i]);
}
arr = arrAux;

console.log(arr);

let app = {
  name: "Google",
  Password: "easypassword",
};

app["lenght"] = 16;

console.log(app);
console.log(app["name"]);
console.log(app["Password"]);

let appName = "Microst";
