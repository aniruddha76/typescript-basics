//objects

let user: {firstName: string, age: number, id: number} = {
    firstName: "thakur",
    age: 21,
    id: 1
}

console.log(user)

//cannot asign different datatypes must be a string if string is defined and number if number is defined
user.firstName = "Aniruddha";
user.id = 372002

console.log("After reassigning\nName: ", user.firstName, "\nId:", user.id);

//automatic assigning types
let person = {
    name: "Mark",
    age: 22
}

console.log(person, person.name, person.age);

person.name = "Zack";
person.age = 21;

console.log(person, person.name, person.age);

const age = person.age;
console.log(age);