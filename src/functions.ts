//adding type after functions means what type of values function will return

function addTwoNumbers(a: number, b: number): number{
    return a +b
}

//arrow function

const subTwoNumbers = (a: number, b: number): number =>{
    return(a - b);
}

addTwoNumbers(3 ,9);
subTwoNumbers(5, 2);

//even if you dont specify the number it will assign the type automatically
function addAllNumbers(items: number[]){
    let total = items.reduce((a,c) => a+c, 0)
    console.log("Total is :", total)
}

addAllNumbers([2,4,6,7,8]);

//return types
function greetUser(name: string, greeting: string) {
    return `${name}, ${greeting}`
}

let greet = greetUser("Hi", "I am a developer")