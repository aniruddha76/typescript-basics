//types of aliases

//example 1 - Tuple
type Rgb = [number, number, number];

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return [r,g,b]
}

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
 
//example 2 - objects litral
type User = {
    name: string,
    score: number
}

const user1: User = {name: "Aniruddha", score: 73}

function formatUser(user: User): void {
    console.log(`${user.name} has a score of ${user.score}`)
}

formatUser(user1);
formatUser({name: "Lokesh", score: 23})