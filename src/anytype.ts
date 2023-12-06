//any types in typescript
let ageOfPerson: any;

ageOfPerson = 30;
console.log(ageOfPerson);

ageOfPerson = "Thirty";
console.log(ageOfPerson);

ageOfPerson = true;
console.log(ageOfPerson);


//even if youu dont declare the type typescript will automatically assign 'any' type
let title;

title = 23;
console.log(title);

title = {
    name: "Welcome to the dead house",
    series: "goosebumps",
    gen: "fiction",
    available: true
};
console.log(title);

title = "This is title string";
console.log(title);


//any types inside arrays, can also push anything even object
let thingsArray: any[] = ["Hello", 32, true, null];

thingsArray.push({id:123});

console.log(thingsArray);


//any types in functions
function addTogether(values: any): any{
    console.log(values + values)
}

let resultOne = addTogether("hello");
let resultTwo = addTogether(2);
let resultThree = addTogether(true);
