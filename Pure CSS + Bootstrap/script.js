var result = 0;

if (result >= 70 && result < 100) {
    console.log("A")
}
else if (result >= 60 && result < 70) {
    console.log("B")
}
else if (result >= 50 && result < 60) {
    console.log("C")
}
else if (result >= 40 && result < 50) {
    console.log("D")
}
else if (result >= 30 && result < 40) {
    console.log("E")
}
else if (result < 30) {
    console.log("F")
}
else {
    console.log("Invalid")
}

//switch case syntax
let score = 49;
switch (true) {
    case (score > 90 && score < 100):
        console.log("A");
        // code block
        break;
    case (score > 80 && score < 90):
        console.log("B");
        // code block
        break;
    case (score > 70 && score < 80):
        console.log("C");
        // code block
        break;
    default:
        // code block]
        console.log("Invalid")
}

let age = 10;
let salary = 1000;
switch (true) {
    case (age > 18):
        console.log(salary + 2999);
        break;
    case age < 18:
        console.log(salary + 1000);
        break;
    default:
        console.log("Invalid")
}

let day = "Sunday"

switch (day) {
    case ("Monday"):
        console.log('Go to work');
        break;
    case ("Tuesday"):
        console.log('Go to work');
        break;
    case ("Wednesday"):
        console.log('Go to work');
        break;
    case ("Thursday"):
        console.log('Go to work');
        break;
    case ("Friday"):
        console.log('Go to work');
        break;
    case ("Saturday"):
        console.log('Stay at home');
        break;
    case ("Sunday"):
        console.log('Go to church');
        break;
    default:
        console.log("There is no such day")
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
    if (i == 5) {
        console.log("I am at 5");
        continue;
    }
}
console.log(i)

// countdown
for (countdown = 10; countdown > 0; countdown--) {
    console.log(countdown)
}
console.log('Happy New Year!')

let counter = 5
while (counter > 0) {
    console.log(counter)
    counter--
}
console.log('Happy Easter!')

let year = 2017
while (year < 2027) {
    console.log(year + 1)
    year = year + 1
}

for (let i = 1; i <= 2; i++) {
    console.log('Print New week')
    for (let j = 1; j <= 5; j++) {
        console.log("Week", i, "- Day", j)
    }
    console.log('New week printed!')
}

//Multiplication table
for (let i = 1; i <= 12; i++) {
    console.log('Multiplication table', i)
    for (let j = 1; j <= 12; j++) {
        console.log(i, "x", j, "equals", (i * j))
    }
}


for (i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log('Gold medal')
    }

    else if (i == 2) {
        console.log('Silver medal')
    }

    else if (i == 3) {
        console.log('Bronze medal')
    }

    else {
        console.log(i)
    }
}