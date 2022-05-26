/*----------BACKGROUND CHANGER------------------------*/
const btn = document.querySelector("button");
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

btn.addEventListener("click",draw);
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









