// function addNum(a, b) {
//     console.log(a + b)
// }

// addNum(1, 2)

// let arr = ["apple", 1, 2, 3, 4, "yam"]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let j = 0
// while (j < arr.length) {
//     console.log(arr[j])
//     j++
// }


// function LetterFinder(word, match) {
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === match) {
//             console.log('Found the', match, 'at', i)
//         }
//         else {
//             console.log('---No match found at', i)
//         }
//     }
// }

// LetterFinder("test", "t")

// console.log(Math.random())

// //Object Literal - Dot Notation
// let user = {}
// user.name = "Meleyotan"
// user.age = 22
// user.sex = "M"

// console.log(user)

// //Object Literal - Key/Value Pair Notation
// let user1 = {
//     name: "Oreoluwa",
//     age: 19,
//     sex: "F"
// }

// console.log(user1)

// //Object Literal - Bracket Notation
// let user2 = {}
// user2["name"] = "Olubukola"
// user2["age"] = 27
// user2["sex"] = "M"

// console.log(user2)

// try {
//     console.log(a + b)
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     // console.log(error.stack)
// }

// console.log("My program does not stop")


// function addTwoNums(a, b) {
//     try {
//         if (typeof a !== Number) {
//             throw new TypeError("The first argument is not a number");
//         }
//         else if (typeof b !== Number) {
//             throw new TypeError('The second argument is not a number')
//         }
//         else {
//             console.log(a + b)
//         }
//     }
//     catch (error) {
//         console.log("Error!", error)
//     }
// }


// addTwoNums(5, "5")
// console.log('I threw the error')

// function letterFinder(word, match) {
//     var conditional = typeof(word) == 'string' && word.length >=2
//     var conditional2 = typeof(match) == 'string' && match.length ==1
//     if (conditional && conditional2){
//         for(var i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//             //if the current character at position i in the word is equal to the match
//             console.log('Found the', match, 'at', i)}
//             else {
//                 console.log('---No match found at', i)
//                 }
//                 }
//     }
//     else{
//         console.log("Please pass correct arguments to the function")
//     }
// }
// letterFinder(5, 2)

// try {
//     throw new Error();
//     console.log('Hello');
//   } catch(err) {
//     console.log('Goodbye');
// }

// var str = "Hello";
// str.match("jello");

// try {
//     console.log('hello')
// }
// catch { 
//     console.log('caught')
// }

function vowelsAndConsonants(s) {
    for (let i = 0; i < s.length; i++) { //loop through to find vowels
        switch (s[i]) {
            case "a":
                console.log(s[i])
                break
            case "e":
                console.log(s[i])
                break
            case "o":
                console.log(s[i])
                break
            case "i":
                console.log(s[i])
                break
            case "u":
                console.log(s[i])
                break
        }
    }
    for (let j = 0; j < s.length; j++) { //loop through to find vowels
        switch (s[j]) {
            case "a":
                continue
            case "e":
                continue
            case "i":
                continue
            case "o":
                continue
            case "u":
                continue
            default:
                console.log(s[j])
        }

    }
}
vowelsAndConsonants("")

function getSecondLargest(nums) {
    let eachlargest = []
    // Complete the function
    let rearrangement = nums.sort((a,b)=> a-b)
    console.log(rearrangement[(rearrangement.length)-1])
    for (let i = 0; i < rearrangement.length; i++){//loop through and remove duplicated numbers
        if (eachlargest.includes(rearrangement[i])) {
            continue
        }
        else{
            eachlargest.push(rearrangement[i])
        }
    }
    eachlargest = eachlargest.sort((a,b)=>a-b)
    console.log(eachlargest)
    let secondlargest = eachlargest[(eachlargest.length)-2]
    return secondlargest
}

console.log(getSecondLargest([1, 2, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 10, 9, 9]))

function reverseString(s) {
    try {
        s = s.split('').reverse().join('')
        console.log(s)
        }
    catch (error) {
        console.log(error.message)
        console.log(s)
    }
}

reverseString('yamal')

function isPositive(a) {
    try {
        if (a > 0) {
            console.log('YES')
        }
        else if (a == 0) {
            throw new Error("ZeroError")
        }
        else {
            throw new Error("Negative Error")
        }
    }
    catch (error) { 
        console.log(error.message)
    }
}

try {
    isPositive(-1)
    isPositive(5)
    isPositive(0)
}
catch(error){
    console.log(error.message)
}

