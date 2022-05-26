// TODAY WE ARE GOING TO WORK ON THE CONDITIONALS!
// There are four different type of conditional in JS
"WE HAVE if - else - else if - switch"
// As a person who is familiar with programming the only thing 
//      that I don't know here is the switch 
//                      Lets have a look!
//------------------------------------------------------------------//

"The basic templete of the if statements is as follows"

let condition;
if (condition) {
    // block of code to be executed if the condition is true
}

let hour;
if (hour < 18) {
    greeting = "Good Day";
}

"Lets see the basic template of the if else"

if (condition) {
    // Block of code to be executed if the condition is true!
} else {
    // block of code to be executed if the condition is not true!
}


// Example:
// Lets set the hour to see how it works!
// hour = 5;
// hour = 19;

if (hour < 18) {
    greeting = "Have a good day!";
} else {
    greeting = "Have a good night!";
}

// alert(greeting); // if 5, it is Have a good day! If 19 it returns Have a good night! 


"Lets see the else if statement"



let condition1, condition2
if (condition1) {
    // block of code to be executed if condition1 is true
} else if (condition2){
    // block of code to be executed if condition1 is false and condition2 is true!
} else {
    // block of code to be executed if the condition1 is false and condition2 is false
}

// Lets see an example!

let time
if (time < 10){
    greeting = "Good morniing";
} else if (time < 20) {
    greeting = "Good Day"
} else {
    greeting = "Good Evening"
}


// Now it is time to learn the new one!!!
"SWITCH"

let expression;
let x;
let y;
switch(expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}
// The value of the expression is compared with the values of each case.
//      If there is a match, the associated block of code is executed.
//          If there is no match, the default code block is executed. 

// EX:
switch (new Date().getDay()) {  // The function new Date().getDay() returns the 
    //      day as a value of 0 to 6
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2: 
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
// alert(day); // Saturday!

// Another ex:

switch (new Date().getDay()) {
    case 6:
        text = "IT IS SATURDAY!!!!";
        break;
    case 0: 
        text = "IT IS SUNDAY!!!";
    default:
        text = "Still waiting for the weekend..."

}
// alert(text);

// COMMON CODE BLOCKS!
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon is Weekend!";
        break;
    case 0:
    case 6:
        text = "It is Weekend!";
        break;
    default:
        text = "Looking forward to the Weekend!"
}
// alert(text);
