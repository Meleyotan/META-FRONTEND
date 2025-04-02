
//Iterative Approach
function fibonacci(n) {
    let fibonacci_series = [0, 1];
    for (let i = 2; i < n; i++){
        fibonacci_series.push(fibonacci_series[i-1]+fibonacci_series[i-2])
    }
    return fibonacci_series
}


console.log(fibonacci(10));

//Recursive Approach
function rec_fib(n) {
    if (n == 0) { return 0 };
    if (n == 1) {
        return 1
    };
    return (rec_fib(n - 1) + rec_fib(n - 2))
}

function generaterecfib(n) {
    let rec_fib_series =[]
    for (let i = 0; i < n; i++){
        rec_fib_series.push(rec_fib(i))
    }
    return rec_fib_series
}

console.log(generaterecfib(5))

//print a triangle
for (let i = 0; i < 10; i++){
    console.log( "*".repeat(i))
}

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
        return this.sleepy
    }
}

console.log(virtualPet.sleepy)
console.log(virtualPet.nap())
console.log(virtualPet.sleepy)

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Declare a variable for the message
    // WRITE YOUR CODE HERE
    var message;
    message = `%c${txt}`

    // Declare a variable for the style
    // WRITE YOUR CODE HERE
    var style = `color: ${color}`
    
    // Append background style to the style variable
    // WRITE YOUR CODE HERE
    style += `background: ${background};`;
    
    // Append font size style to the style variable
    // WRITE YOUR CODE HERE
    style += `font-size ${fontSize};`;
    
    // Log the message with the applied style
    // WRITE YOUR CODE HERE
    console.log(message,style)
}
consoleStyler("blue", "yellow", "15px", "Meleyotan")

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Declare a fontStyle variable with default styles
    // WRITE YOUR CODE HERE
    var fontStyle = "color: tomato; font-size: 50px";
    // Check if the reason is "birthday"
    // WRITE YOUR CODE HERE
    if (reason === "birthday") {
        console.log("%cHappy birthday", fontStyle)
    }
    // If reason is "champions", log a congrats message
    // WRITE YOUR CODE HERE
    else if (reason === "champions") {
        console.log("%cCongrats on the title!", fontStyle)
    }
    else {
        consoleStyler("blue", "yellow", "15px", "Meleyotan")
    }
    // For any other reason, log a default message
    // WRITE YOUR CODE HERE
}
celebrateStyler("birthday")

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
// WRITE YOUR CODE HERE

// Call the celebrateStyler function with an appropriate argument
// WRITE YOUR CODE HERE

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Call consoleStyler with the first four arguments
    // WRITE YOUR CODE HERE

    // Call celebrateStyler with the last argument
    // WRITE YOUR CODE HERE

}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
// Call styleAndCelebrate with appropriate arguments
// WRITE YOUR CODE HERE

class Dog{
    constructor(color, breed) {
        this.color = color
        this.breed = breed
        this.sound = "Bark!"
    }
    bark() {
        console.log(this.sound)
    }
}

let myDog1 = new Dog("blue", "Rotweiler")
myDog1.bark()

// create your classes here
class Courses{
    study(){
        return 'Study'
    }
}
class FECourse extends Courses{
    study(){
        console.log(super.study() + ' OOP')
    }
}
class SECourse extends Courses{
    study(){
        console.log(super.study() + ' Manual Calculations')
    }
}

class DACourse extends Courses{
    study() {
        console.log(super.study() + " the 'Ask Module'")
    }
}

let fecourse = new FECourse()
let secourse = new SECourse()
let dacourse = new DACourse()
fecourse.study()
secourse.study()
dacourse.study()


class Animal{
    constructor(color = 'yellow', energy = 100) {
        this.color = color
        this.energy = energy
    }

    isActive() {
        if (this.energy > 20) {
            this.energy -= 20
            console.log(this.energy)
        }
        else if (this.energy <= 0) {
             this.sleep()  
        }
    }
    sleep() { 
        this.energy += 20
        console.log('Sleep')
    }
    getColor() {
        console.log(this.color)
    }
}
class Cat extends Animal { 
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy)
        this.sound = sound
        this.canJumpHigh = canJumpHigh
        this.canClimbTrees = canClimbTrees
    }
    makeSound() {
        console.log(this.sound)
    }
}
class Bird extends Animal {
    constructor(sound = 'chirp', canFly = 'true', color, energy) {
        super(color,energy)
        this.sound = sound
        this.canFly = canFly
    }
    makeSound() {
        console.log(this.sound)
    }
 }
class HouseCat extends Cat{
    constructor(houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees,color,energy)
        this.houseCatSound = houseCatSound
    }
    makeSound(option) {
        if (option) {
            super.makeSound()
        }
        else { 
            console.log(this.houseCatSound)
        }
    }
}
class Tiger extends Cat{ 
    constructor(tigerSound, sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound
    }
     makeSound(option) {
        if (option) {
            super.makeSound()
        }
        else { 
            console.log(this.tigerSound)
        }
    }
}
class Parrot extends Bird{ 
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy)
        this.canTalk = canTalk
    }
    makeSound(option) {
        if (option) {
            super.makeSound() 
        }
        if(this.canTalk) {
            console.log('I am a talking parrot')
        }
    }
}

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(true); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

console.log(polly.energy); // 100
console.log(polly.color); // yellow

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

console.log(penguin.sound); // 'shriek'
console.log(penguin.canFly); // false
console.log(penguin.color); // 'black and white'
console.log(penguin.energy); // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
// WRITE YOUR CODE HERE - Add a constructor with default parameters
// WRITE YOUR CODE HERE - Add the sleep() method
// WRITE YOUR CODE HERE - Add the doSomethingFun() method
class Person{
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.name = name
        this.age = age
        this.energy = energy
    }
    sleep() {
        this.energy += 10
    }
    doSomethingFun() {
        this.energy -=10
    }
}
// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
// WRITE YOUR CODE HERE - Add a constructor with additional parameters
// WRITE YOUR CODE HERE - Add the goToWork() method
class Worker extends Person{
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
     }
    goToWork() {
        this.xp += 10
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    // WRITE YOUR CODE HERE - Call the goToWork() method
    // WRITE YOUR CODE HERE - Return the intern object
    let intern = new Worker(0, 10, "Bob", 21, 110)
    intern.goToWork()
    return intern
}

// Task 4: Code a manager object, methods
function manager() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
    // WRITE YOUR CODE HERE - Call the doSomethingFun() method
    // WRITE YOUR CODE HERE - Return the manager object
    let manager = new Worker(100, 30, "Alice", 30, 120)
    manager.doSomethingFun()
    return manager
}

console.log(intern())
console.log(manager())




