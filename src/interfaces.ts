//interfaces in typescript
interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {name: "R. L. Stine", avatar: "/img/stine.png"}
console.log(authorOne)

interface Post{
    title: string,
    body: string,
    tags: string[],
    createdAt: number,
    author: Author
}

const newPost: Post = {
    title: "Dancing of the wolves",
    body: "A Great novel delivered by goosebumps",
    tags: ["Adventure", "Horror", "Mystry", "Fiction"],
    createdAt: 1996,
    author: authorOne
}

console.log(newPost);


//interfaces as arguements types in functions
function createPost(post: Post): void{
    console.log(`Created post ${post.title} by ${post.author.name}`)
}

createPost(newPost);


//interfaces with arrays
let posts: Post[] = []

posts.push(newPost)