// Làm việc với string

let str1 = "My name is :";
let name1 = "Chi";

let str2 = `${str1} ${name1}`;
console.log(str2);

// Destructuring objects

let information = { fisrtName: "Chi", lastName: "VietNam" };

let { firstName, lastName } = information;

console.log(firstName);
console.log(lastName);

// Destructuring objects

let [firstNameA] = ["Chi", "VietNam"];
console.log(firstNameA);

// Object Literal

let firstNameB = ["Chi"];
let informationB = { firstNameB };
console.log(informationB);

// Vòng lặp for… of

let str = "hello";

for (let char of str) {
  console.log(char);
} // "h"// "e"// "l"// "l"// "o"

// Spread syntax

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];

console.log(arr3);

// Arrow function

const square = (num) => num * num;
square(2);
console.log(square(2));

// includes()

let str3 = "Hello World";
console.log(str3.includes("hello"));

// Class

class Car {
  constructor(wheels, doors) {
    this.wheels = wheels;
    this.doors = doors;
  }
  describeMe() {
    console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
  }
}

const car1 = new Car(4, 2);
car1.describeMe();

Car.prototype.describeMe = function () {
  console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
};

//  Promise, async và await

function takeLongTimeAsync() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("long_time_value"), 1000);
  });
}

async function test() {
  const v = await takeLongTimeAsync();
  console.log(v);
}

test();
