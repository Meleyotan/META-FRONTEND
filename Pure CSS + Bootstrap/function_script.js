function addNum(a, b) {
    console.log(a + b)
}

addNum(1, 2)

let arr = ["apple", 1, 2, 3, 4, "yam"]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let j = 0
while (j < arr.length) {
    console.log(arr[j])
    j++
}


function LetterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log('Found the', match, 'at', i)
        }
        else {
            console.log('---No match found at', i)
        }
    }
}

LetterFinder("test", "t")

console.log(Math.random())

//Object Literal - Dot Notation
let user = {}
user.name = "Meleyotan"
user.age = 22
user.sex = "M"

console.log(user)

//Object Literal - Key/Value Pair Notation
let user1 = {
    name: "Oreoluwa",
    age: 19,
    sex: "F"
}

console.log(user1)

//Object Literal - Bracket Notation
let user2 = {}
user2["name"] = "Olubukola"
user2["age"] = 27
user2["sex"] = "M"

console.log(user2)

try {
    console.log(a + b)
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    // console.log(error.stack)
}

console.log("My program does not stop")


function addTwoNums(a, b) {
    try {
        if (typeof a !== Number) {
            throw new TypeError("The first argument is not a number");
        }
        else if (typeof b !== Number) {
            throw new TypeError('The second argument is not a number')
        }
        else {
            console.log(a + b)
        }
    }
    catch (error) {
        console.log("Error!", error)
    }
}


addTwoNums(5, "5")
console.log('I threw the error')

function letterFinder(word, match) {
    var conditional = typeof(word) == 'string' && word.length >=2
    var conditional2 = typeof(match) == 'string' && match.length ==1
    if (conditional && conditional2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)}
            else {
                console.log('---No match found at', i)
                }
                }
    }
    else{
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder(5, 2)
