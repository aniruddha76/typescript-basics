//union types in javascript

let someId: number | string;

someId = 1;
console.log(someId);

someId = "Passing string in someId";
console.log(someId);

let email: string | null;

email = "123@gmail.com"
console.log(email);

email = null;
console.log(email);

//union in aliases
type Id = number | string;

let anotherId: Id;

anotherId = 2023;
console.log(anotherId);

anotherId = "Two Zero Two Three";
console.log(anotherId);

//union type pitfall, we can't use parse int
function swapId(id: Id): Id{
    return id
}

console.log(swapId("5"))