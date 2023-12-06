//tuples in typescript
let people: [string, number, boolean] = ['Lokesh', 21, true]

console.log(people)

//tuple example [hsla is a common format for color = h: hue, s: saturation, l: lumi something and a: alpha something means opacity]
let hsla: [number, string, string, number]
hsla = [200, "100%", "50%", 1]

console.log(hsla);

//another example of co-ordidates
let xy: [number, number];
xy = [94.7, 20.30]

console.log(xy)

//we can also use inside function
function userCoords(): [number, number]{
    const lat = 100;
    const long = 50;

    return [lat, long]
}

const [lap, long] = userCoords()
console.log(userCoords())

//we can add names to each values within the tuple
let user2: [name: string, age: number]

user2 = ["peach", 25]

console.log(user2[0], user2[1], user2)