//type guards

type Id2 = number | string;

function swapIdTypes (id: Id2){
    if(typeof id === 'string'){

        //inside this ypu can use all string method
        return parseInt(id)

    } else {
        
        //can use any number methods and properties
        return id.toString();

    }
}

const idOne = swapIdTypes(1)
const idtwo = swapIdTypes("2")

console.log(idOne, idtwo)


//interfaces examples - tagged interface
interface user2 {
    type: "user",
    username: string,
    email: string,
    id: Id2
}

interface person {
    type: "person",
    firstname: string,
    age: number,
    id: Id2
}

function logDetails(value: user2 | person): void {
    if(value.type === "user"){
        console.log(value.email, value.username, value.id, value.type)
    }

    if(value.type === "person"){
        console.log(value.firstname, value.age, value.id, value.type)
    }
}

console.log(logDetails({username: "Thakur", type: "user", email: "123@gmail.com", id: "Three"}));
console.log(logDetails({type: "person", firstname: "Aniruddha", age: 21, id: 2023}));