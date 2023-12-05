//Arrays
let names: string[] = ["Aniruddha", "Lokesh", "Thakur"];
let ages: number[] = [21, 21, 24, 28];

names.push("Itadori");
ages.push(32);

console.log("Names: " + names + "\nages: " + ages);

//types of interfaces in array

let fruits = ["Apples", "mango", "banana", "papaya"];

fruits.push("peaches");

const f = fruits[3]
console.log(fruits, f);

//different data types in array
let things = [1, true, "Hello"];
const t = things[1]

console.log(things, t);