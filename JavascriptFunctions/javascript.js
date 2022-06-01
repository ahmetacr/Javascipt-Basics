/*----------BACKGROUND CHANGER------------------------*/
/* const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
    return Math.floor(Math.random()*number);
}

function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for(let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0 , 2 * Math.PI);
        ctx.fill();
    }
}

btn.addEventListener("click",draw); */
/*------------------------------------------------------*/




"Functions in Javascript!"
// Built-in browser functions

"We can replace a string"
const myText = "I am a string";
const newString = myText.replace("string","sausage"); // replaces string w sausage
console.log(newString);
// The replace() string fuction takes a source string,
// and a target string and replaces the soure string,
// with the target string, and returns the newly formed string,


"We can transform an array to string."
const myArray = ["I","'M"," THOMAS"];
const madeString = myArray.join("");
console.log(madeString);
// The join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

"We can generate a random number;"
const myNumber = Math.random();
// The random() function generates a random number between
// 0 and up to but not including 1, and returns that number
console.log(myNumber); // in btw 0-1 

/* Functions that are part of objects are called methods. */

/*function random(number) {
    return Math.floor(Math.random()*number);
}
let x = random(1000);*/
console.log(Math.floor()) // Math.floor() function returns  the largest integer less than or equal to a given number.
// Math.floor(5.95) returns 5
// Math.floor(6.95) returns 6
// Math.floor(-5.15) returns -6

// INVOKING FUNCTIONS!
function myFunction(number) {
    console.log(`HELLO WORLD! ${number} times!`)
}

// myFunction(10);

// Add function

function adding(x,y) {
    console.log(`The answer is ${x + y}`);
}

// adding(10,7); 
// console.log(`X = ${x}`);


// Optional Parameters
const myGoddamnArray = ["I", "LOVE", "ICECREAM"];
const madeAString = myGoddamnArray.join("-");
// console.log(madeAString); // Returns I-LOVE-ICECREAM 

const madeAnotherString = myGoddamnArray.join();
// console.log(madeAnotherString); // Returns I,LOVE,ICECREAM it adds , by default!

// To add default parameters we use = after the name of the parameter! EX:

function hello(name="There") {
    console.log(`Hello ${name}!`)
}
// So if we use hello(),
// hello() // It returns Hello There!
// But if we use another name,
// hello(`ahmed`); // It returns hello ahmed


// Anonymous functions and Arrow functions;
// You can create a functioon without even a name
(function() {
    console.log("SALAMIN ALEYKUM")
})

// If a functions needs to return a value, and contains only one line, you can also
//  omit the return statement! EX:
const originals = [1,2,3,4];
const doubled = originals.map(i => i * 2);
// console.log(doubled); // returns [2,4,6,8]

// So in the example above, i => i*2 is the arrow function equivalent of:
function doubleI(i) {
    return i * 2;
}
tryThisArray = [1,2,3,4,5,6,7];
//doubledArray = doubleI(tryThisArray);
//console.log(doubledArray);
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', i => output.textContent = `You pressed "${i.key}".`);


//------------------------------------------//
// console.log("STILL WORKING");
let ahmet = "ahmed said acar";
let ahmed = ahmet.replace("ahmed","ahmet");

//
const trialInput = document.querySelector(".trial");
const output2 = document.querySelector("#output2");
// trialInput.addEventListener("change", input => output2.textContent = `Your name is "${input.value}"` )

//-------------------------------------------//

function favoriteAnimal(animal,color) {
    console.log(animal + " is my favorite animal!" + `also ${color} is my favorite color!`);
}

// favoriteAnimal("zebra","green");

function showMessage(from, text) {
    from = "*" + from +  "*";
    console.log(from + ":" + text);
}
showMessage("Ahmet","How you doing today?");

let from = "ahmet";
showMessage(from,"How've you been?");
console.log(from); // returns ahmet not *ahmet*

// A parameter is the variable listed inside the parenthesees in the function declaration.
// An argument is the value that is passed to the function when it is called 

"Default parameters"
function showMessage(from,text = "No text given!") {
    console.log(`${from}: ${text}`);
}

// showMessage("Ad") // Ad: No text given!

"There are old alternatives for default parameters:"
// EX1:
function showMessage(from,text) {
    if(text == undefined) {
        text = "No goddamn text given";
    }

    console.log(from + ":" + text);
}
// showMessage("sami"); // Sami: no goddamn text given

//EX2:
function showMessage(from,text) {
    text = text || "No text given at all!" // If text == 0,undifined, or null
    console.log(from + ": " + text);
}
// showMessage("MAHMUD"); // MAHMUD: no text given at all! 


//EX3;

function showCount(count) {
    // If count is undefined or null, show "unknown"
    alert(count ?? "unknown");
}

// showCount(10); // 10 
// showCount(); // Unknown
// showCount(0); // 0
// showCount(null); // unknown

"RETURNING A VALUE:"

function sum(a,b) {
    return a + b;
}

// console.log(sum(10,4)); // 14

let c = sum(10,5);
// console.log(c); // 15

function check(age = prompt("What is your age dude?")) {
  // if not given, then it asks!
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?")
    }
}


/* if (check()) {
    console.log("Access Granted!");
} else {
    alert("Acces Denied!");
}
*/


// check(10)

function showMovie(age) {
    if ( !check(age)) { // if true then proceeds!
        return;
    }
    console.log("Showing you the movie...")
}

// showMovie();


function DoNothing() {
    return;
}

// console.log(DoNothing() === undefined); // true.

/* Never add a new line after return, for ex: 
return
    (some + long + expression bla bla bla);

above will not be working!

But you can do this: 

return (
    bla + bla + bla
    bla + bla + bla
)
That will work!
*/

// Using || instead of if
function checkAge(age) {
    return (age > 18) || confirm("Did your parents allow you?");
}
// console.log(checkAge(19));

// Using ? instead of if
function checkAge(age) {
    return (age > 18) ? true : confirm("Did your parents allow you?");
}

// console.log(checkAge(16));

// Practice Questions;
// Find minimum value with min() function

function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}



// console.log(min(10,5)); // 5 
// console.log(min(1,1)); // 1 

"Alternatively:"

function min(a,b) {
    return a < b ? a : b;
}
// console.log(min(11,1)); // 1 


"Another way to create a function"
let sayHi = function() {
    console.log("Hello There!");
}; // Since it is not a regular function syntax, we use ; 

// You can also copy a function
let func = sayHi;

// func(); // Hello There
// sayHi(); // Hello There

"CALLBACK FUNCTIONS: "
// ask(question, yes, no)
// question: Text of the question, yes: Function to run if the answer is "Yes",
//      no: Function to run if the answer is "No"
// The function should ask the question and, depending on theuser's answer, call yes() or no():

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}


function showOk() {
    console.log("You agreed.");
}
function showCancel() {
    console.log("You canceled the execution")
}

// usage: functions showOk, showCancel are passed as arguments to ask function
// ask("Do you agree",showOk,showCancel);

// We can use Function Expressions to write an equivalent, shorter function:
/*
ask(
    "Do you agree?",
    function() { console.log("You agreed dude!");},
    function() { console.log("You disagreed dude!");}
) */


let age = 16; // tkae 16 as an example
if (age <18) {
   // welcome();
    function welcome() {
        console.log("Hello!");
    }
   // welcome();

} else {
    function welcome() {
        console.log("Greetings!")
    }
}
// welcome() // It was not supposed to run but it does lol!



// age = prompt("What is your age?", 18);
let welcome;

if(age < 18) {
    welcome = function() {
        console.log("Hello Dude");
    };
} else {
    welcome = function () {
        console.log("Greetings!");
    };
}
// welcome();

let yourName
// yourName = prompt("Is your name Ahmed?");
let welcomeAhmed = (yourName == "Yes" || yourName == "yes") ?
    function() {console.log("Welcome Ahmed!");} :
    function() {console.log("Who the hell are you then dude?");};

// welcomeAhmed();

// isAhmed = confirm("Are you ahmed?");

/*verified = (isAhmed) ? "You are verified!": // If isAhmed true then You are verified else you are not 
    "you are not verified dude!";
*/
// console.log(verified);


/*---------------------------------------------------------------------------------*/


// Lets dive into the Arrow functions 
"ARROW FUNCTIONS THE BASICS: "

// let func = (arg1, arg2, ... , argN) => expression;

sum = (a,b) => a + b;
/* This arrow function is  a shorter form of;
let sum = function(a,b) {
    return a + b;
};
*/


//console.log(sum(1,2));

let divide = (a,b) => a / b;
// console.log(divide(6,5));


let addString = (string1,string2) => console.log(`${string1} ${string2}`);

// addString("Ahmed Said","ACAR");

let double = (number) => number*2;
console.log(double(5)); // 10

let square = (number) => number**2;
console.log(square(5)); // 25

let cube = (number) => number**3;
console.log(cube(5)); // 125

// There might be no arguments inside the functions ex:
let sayHEY = () => console.log("HELLO THERE!!!!!!!!!!!!");
sayHEY();

// If ew only have one argument, then parantheses around parameters can be omitted,
//   making that even shorter.

let doubleN = n => n * 2;
// console.log(doubleN(10));

// It can also be used as Function Expressions,
// age = prompt("What is your age man?", 18);

let welcomeToPage = (age < 18) ?
    () => console.log("Hello Boi"):
    () => console.log("Hello Dude!");

welcomeToPage();


// Multiline Arrow Functions:

sum = (a,b) => {
    let result = a + b;
    return result;
}

// console.log(sum(10,5)); // 15

let askQuestion = (question,yes,no) => (confirm(question)) ? yes():no();
/*
askQuestion(
    "Do you agree?",
    () => console.log("You agreed"),
    () => console.log("You canceled the execution!")
);
*/

// askQuestion("what is the question?",console.log(),alert());


" JavaScript Call Stack"
// JavaScript engine uses a call stack to manage execution contexts:
//      the Global Execution Context and Function Execution Contexts.
// The call stack works based on the LIFO principle i.e., last-in-first-out/


"PRACTICE FUNCTIONS!"

let add7 = (number) => number + 7;
// console.log(add7(10));

let multiply = (num1,num2) => num1 * num2;
// console.log(multiply(10,4));

let capitalize = (stringInput) => stringInput.replace(stringInput.charAt(0),stringInput.charAt(0).toUpperCase());

gs = "gavatasaray"
// console.log(capitalize(gs)); // Gavatasaray
// console.log(capitalize("ahmed")); // Ahmed


let lastLetter = (string) => string.charAt(string.length -1); // simple and easy to read
console.log(lastLetter("Zekeriya")); // returns a 




