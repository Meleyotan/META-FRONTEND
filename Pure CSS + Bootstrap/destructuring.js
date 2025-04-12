
import { } from 'lodash'

//Destructuring the PI property of the Math object into the PI variable
let { PI } = Math
console.log(PI)

let person = { name: "Meleyotan", age: 15, height: "6'", profession: "structural engineer" }
console.log(person)

console.log(Object.keys(person))
console.log(typeof Object.keys(person))

for (let key of Object.keys(person)) {
    console.log(key)
}

console.log(Object.entries(person))
for (let key in Object.entries(person)) {
    console.log(Object.entries(person)[key])
}
// for...in loops over object properties and its inherited properties provided by prototype
// for...of loops does not iterate over the object and its prototype properties

const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];
// Destructure the second product's name and price from the array

const [,,[secondProductName, secondProductPrice]] = products

console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);


const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

const {title, author, timePosted} = review

// Destructure the author, title, and timePosted properties from the review object
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);

const modifyArray = (nums) => {
    return nums.map((num)=>{return (num%2 === 0)?(num*2):(num*3)})
}

console.log(modifyArray([1,2,3,4,5,6,7,7]))


try {
    console.log(a+b)
    throw new Error ('This is a Reference Error')
}
catch (error) { 
    console.log(error.message)
}
