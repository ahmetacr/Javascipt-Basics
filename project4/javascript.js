"LOGICAL OPERATORS"
// THERE ARE FOUR LOGICAL OPERATORS IN JAVASCRIPT
// || (OR), && (AND), ! (NOT), ?? (NULLISH COALESCING)

// The or operator is represented with two vertical line symbols:
// alert(true || true); // true
// alert(true || false); // true
// alert(false || true); // true
// alert(false || false); // false

// if(1 || 0) {
//     alert("TRUTHY!")
// }

// alert(1 || 0); // 1 
// alert(1 || 0); // 1
// alert(0 || 0); // 0 

// let hour = 9; 
// if (hour < 10 || hour > 18) { // line of code works if the answer is true
//     alert("THE OFFICE IS CLOSED")
// }
// 
// let hour = 12;
// let isWeekend = true;
// 
// if (hour < 10 || hour > 18 || isWeekend) { // false || false || true = true
//     alert("The office is closed. "); // It is the weekend 
// }

" result = value1 || value2 || value3;" // if one is true returns true. if no returns the last

// alert(0 || 0 || 1)TEAL
// console.log(1 || 0)
// console.log(0 || 0 || "ahmet") // returns ahmet since it is the last value!
// console.log(undefined || null || 0); // Returns 0 since it is the last value!

let firstName = "";
let lastName = "";
let nickName = "";

// console.log(firstName || lastName || nickName || "Anonymous!"); // Returns Anonymous since 
                                                                //  the others are empty
// true || console.log("Not printed"); // This one is not printed since the first value is true
                                    // and it does not go further since stopped!
// false || console.log("Printed"); // This one is printed since the first one is false!

//-------------------------------------------------------------------------//
" && THE AND OPERATOR"

// AND returns true if both operands are true!
// console.log( true && true); // true
// console.log( true && false); // false
// console.log( false && true); // false
// console.log( false && false); // false

// Example with if:
// let hour = 12;
// let minute = 30;
// 
// if (hour == 12 && minute == 30) {
//     console.log(`The time is ${hour}:${minute}`);
// }
// 
// if (condition = 1 && 0) {
//     console.log("WONT WORK SINCE THE ANSWER IS FALSE");
// } else {
//     condition = "0 = FALSE"
//     console.log(`condition is: ${condition}`);
// }
// 

" && Finds the first false value!" // returns the last value if there is no false
// console.log(1 && 1 && 1 && "AHMED"); // returns Ahmed
// console.log(0 && 0 && 0 && "Ahmed"); // Returns 0 
// 
// console.log(1 && null) // Null Since false
// console.log(1 && 2 && 3) // 3 since the last and no false

"PRESENCE OF AND && IS HIGHER THAN OR ||"
// So the code a && b || c && d is the same as --> (a && b) || (c && d)
// !!!! DONT REPLACE IF WITH || or && !!!!
let x = 1;
// (x > 0) && console.log("GREATER THAN ZERO!") // first one is true so it goes
"Instead of the above, use below" // Since it is more readable

x = 1
// if (x > 0) console.log("Greater than zero!")
// if (x > 0) { console.log("GREAT") }


//--------------------------------------------------------------------------------//
" ! (NOT)"
// Syntax is simple: result = !value
// let value 
// result = !value;
// console.log(result); // True
// result = !result;
// console.log(result); // False

// console.log(!!0) // !! is used to convert a value to boolean
 
// console.log(Boolean("non-empty string")) // True
// console.log(Boolean("")) // False
" ! (NOT) has the highest precedence, so it always executes first, before && and ||"
// let age = 14
// if (age >= 14 && age <= 90) {
//     console.log("THE AGE IS APPLICABLE")
// }
// age = 92
// 
// if (!(age >= 14 && age <= 90)) {
//     console.log("BU N E Y D I  M K")
// }
// 
// if (age <= 14 || age >= 90 ) {
//     console.log("BU NEYDI MK")
// }
 
// let person = prompt("Please Enter your name!", "username");
// console.log(person);


// let username = prompt("Please Enter you Username!")
// switch(username) {
//     case "Admin":
//         password = prompt("Please Enter your Password!")
//         if (password == "TheMaster") {
//             alert("Welcome Home!");
//         } else if (password == null) {
//             alert("Cancelled!");
//         } else {
//             alert("Sorry, wrong password! Plase try again...");
//         }
//     break;
// 
//     case "" || null:
//         alert("Cancelled!");
//     break;
//     default:
//         alert("Sorry I don't know you!");
// }

//-----------------------------------------------------------

const weather = document.querySelector('.weather'); // we find the related query on html
const para = document.querySelector("p") // related p 

weather.addEventListener("change", setWeather); // when value of select changes,
                                                // event setWeather function works!

function setWeather() {
    const choice = weather.value;
    if (choice === "sunny") {
        para.textContent = "It is nice and sunny outside today.\
            Wear shorts! Go to the beach, or the park and get an ice cream.";
    } else if (choice === "rainy") {
        para.textContent = "Rain is falling outside; take a rain coat and an\
            umbrella, and don\'t stay out for too long ";
    } else if (choice === "snowing") {
        para.textContent = "The snow is coming down - it is freezing\
            Best to stay in with a cup of hot chocolate, or go build a snowman!";
    } else if (choice === "overcast") {
        para.textContent = "It isn\'t raining, but the sky is grey and gloomy; it\
        it could turn any minute, so take a rain coat just in case.";
    } else {
        para.textContent = "";
    }
}
/*----------------------------------------------------------------*/
"TERNARY OPERATOR!"
// (condition) ? run this code : run this code instead

/*isBirthday = 0; 
let greeding = (isBirthday) ? "Happy Birthday Mrs. Smith" : "Good morning Mrs. Smith.";
console.log(greeding); // If the condition is true it returns the first value! */

/*--------------------------------------------------------------*/

  const body = document.querySelector("body");
  const theme = document.querySelector(".theme");
  
  function update(bgColor, textColor,buttonBackgroundColor,buttonColor,buttonFontWeight,BorderColor){ 
      body.style.backgroundColor = bgColor;
      body.style.color = textColor;
      theme.style.backgroundColor = buttonBackgroundColor;
      theme.style.color = buttonColor;
      theme.style.fontWeight = buttonFontWeight;
      weather.style.backgroundColor = buttonBackgroundColor;
      weather.style.color = buttonColor;
      weather.style.fontWeight = buttonFontWeight;
      picturebox.style.backgroundColor = buttonBackgroundColor;
      picturebox.style.color = buttonColor;
      picturebox.style.fontWeight = buttonFontWeight;
      para.style.border = BorderColor;
    
    }
    
  
  //select.addEventListener("change",() => (select.value === "black") ? update("black","white") : update("white","black"))

  theme.addEventListener("change", setColor)

  function setColor() {
      const choice = theme.value;
      if (choice === "black") {
          update("black", "white","grey","black","bold","3px solid darkgrey");
      } else if (choice === "blue") {
          update("blue", "orange","grey","blue","900","3px solid darkgrey");
      } else if (choice === "white") {
          update("white", "black","grey","white","900","3px solid darkgrey");
      } 
    }

/*------------------------------------------------------------------------------------*/
const picturebox = document.querySelector(".M5Select");
const img = document.querySelector(".M5ImageClass");
picturebox.addEventListener("change",setPicture);
let ImageList = [
    "https://www.carscoops.com/wp-content/uploads/2021/03/ig-M535i-1829-1024x555.jpg",
    "https://bringatrailer.com/wp-content/uploads/2017/07/7-23.jpg",
    "https://s1.cdn.autoevolution.com/images/news/tuned-e39-bmw-m5-up-for-grabs-with-several-awesome-interior-and-exterior-mods-163018_1.jpg",
    "https://www.carscoops.com/wp-content/uploads/2020/10/bmw-m5-e60.jpg",
    "https://cdn.motor1.com/images/mgl/A2m8W/s1/2011-247991-2012-bmw-m5-15-6-20111.jpg",
    "https://miro.medium.com/max/1400/0*5wmzy4NE0qMQOuAS.jpg",

];
function setPicture() {
    const choice = picturebox.value;
    if (choice == "picture1") {
        img.src = ImageList[0];
    } else if (choice == "picture2") {
        img.src = ImageList[1];
    } else if (choice == "picture3") {
        img.src = ImageList[2];
    } else if (choice == "picture4") {
        img.src = ImageList[3];
    } else if (choice == "picture5") {
        img.src = ImageList[4];
    } else if (choice == "picture6") {
        img.src = ImageList[5];
    } else if (choice == "picture7") {
        img.src = ImageList[6];
    } else if (choice == "picture8") {
        img.src = ImageList[7];
    }
}



/*-----------------------------------------------------------------------------------------*/

let year;
// year = prompt("In which year was ECMAscript-2015 specifation zart zurt")
// if (year == 2015) {
//     alert("THATS CORRECT!")
//     alert("YOU'RE SO SMART")
// }

"BOOLEAN CONVERSION: "
/* if (0) { // 0 is falsy
    ...
} */

/* if (1) { // 1 is true
    ...
} */

// let cond = (year == 2015); // equality evaluates to true or false!
// if (cond) {
//     console.log(`the condition is ${cond}!`);
// } else {
//     console.log(`The condition is ${cond}!`);
// }

// if (year < 2015) {
//     console.log("Too early...")
// } else if (year > 2015) {
//     console.log("Dude! Too late...")
// } else if (year == 2015) {
//     console.log("Congrats man!")
// } else {
//     console.log("Please enter a number yo!")
// }


/* let result = condition ? value1 : value2 */
let age
// age = prompt("PLEASE ENTER YOUR AGE!")
// let accessAllowed = (age > 18) ? true : false;
// accessAllowed == 1 ? console.log("Access Allowed!") : console.log("Access Denied");
// if (age > 100) {
//     console.log("Dude! Is this really your age?")
// } else if (age <= 100) {
//     ; 
// } else {
//      console.log("Please enter a valid age!");
// }

/* You can do that without using the ? operator. */
let AccessDenied = age < 18;
// console.log(AccessDenied);

"You can use multiple  question mark operators ?"
let message = (age < 3) ? "Hi! Baby!": // if
    (age < 10) ? "Hello Sweaty!": // else if 
    (age < 100) ? "Greetings" : // else if
    "What an unusual age!" // works as an else
// console.log(message);

/*-----------------------------------------------------------*/
"WE WILL NOW HAVE EXAMPLES WITH SWITCH FUNCTION!"

/* EXPRESSION:
switch (expression) {
    case x:
        // execute case x code block
        break;
    case y:
        // execute case y code block
        break;
    default:
        // execute default code block

} 
*/

let day = new Date().getDay();
// console.log(day); // 0-6 sunday - saturday
let dayAnswer;
// dayAnswer = prompt("What is the day bruh?");
// debugger;

// console.log(dayAnswer);
if ((dayAnswer == "sunday") || (dayAnswer == "Sunday")) {
    dayAnswer = 0;
} else if ((dayAnswer == "monday") || (dayAnswer == "Monday")) {
    dayAnswer = 1;
} else if ((dayAnswer == "Tuesday") || (dayAnswer == "tuesday"))  {
    dayAnswer = 2;
} else if ((dayAnswer == "Wednesday") || (dayAnswer == "wednesday"))  {
    dayAnswer = 3;
} else if ((dayAnswer == "Thursday") || (dayAnswer == "thursday"))  {
    dayAnswer = 4;
} else if ((dayAnswer == "Friday") || (dayAnswer == "friday"))  {
    dayAnswer = 5;
} else if ((dayAnswer == "Saturday") || (dayAnswer == "saturday"))  {
    dayAnswer = 6;
} else if (dayAnswer == null)  {
    ;
} else {
    console.log("What kind of answer is that yo?!")
}
// console.log(`The answer is: ${dayAnswer}`);
// console.log(`Day is: ${day}`);

if (dayAnswer == day) {
    console.log("Congrats man! You know what day it is lolll")
} else if (dayAnswer == null) {
    ;    
} else {
    console.log("WRONG ANSWER!")
}




switch (day) {
    case 0:
        console.log("It's Sunday! (The day I used to hate most since tomorrow was monday lol");
        break;
    case 1:
        console.log("It's Monday! ");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!"); 
        break;
    case 5:
        console.log("It's Friday! Don't forget the friday prayer!")
        break;
    case 6:
        console.log("Yaayyy! It's Saturday!")
        break;
    default:
        console.log("We don't exactly know what day it is!")
}   

"THERE MIGHT BE MULTIPLE CASES WHICH SHOULD HAVE THE SAME ACTION!"
// For example:
let month
month = new Date().getMonth(); // 0-11 january - december

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter!");
        break;
    // April, May , June
    case 3:
    case 4:
    case 5:
        // debugger; // This is used to pause the line of code! Go sources of chrome
        console.log("Spring!");
        break;
    // July, Agust, September
    case 6:
    case 7:
    case 8:
        console.log("Summer!");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Fall!");
        break;
    default:
        console.log("What kind of month is that yo!");
}

"We can add conditioal breakpoints to our script!"
    "To do this, we go to the sources panel on chrome and go to the left of the line of code"
        "Right click. And add a conditional break-point!"
            "Then we set our condition ex: dayAnswer == `Monday`"
                "That way our debugger only stops the script if the dayAnswer variable is Monday!"

            
// LETS WORK ON SOME TRICKS FROM TOP:

// STYLE THE CONSOLE:
console.log("%c MAKE THIS GODDAMN THING HAPPEN YO!", "font-size:20px; background-color:#f5f5b9; color:navy; border:2px solid black; text-align:center;")

// Warning!
// console.warn("OH NOOOOOOOOO!!!");

// Error!
// console.error("OH MY GOD STOP MAN YOU CAN'T DO THAT SH*T");

// Info
// console.info("The last Naturally-Aspirated V8 Ferrari was the F458");

// Testing
// const label = document.querySelector("label")
// console.assert(label.classList.contains("theme"), "It doesn't contain that dude!") // It doesn't work bc it contains!

// Cleaning
" console.clear(); "

// Viewing DOM Elements
// console.log(label);
// console.dir(label); // All the properties are gonna be here

// Grouping together
/*    console.group(`${smt}`); // or groupCollapsed
    // code
    // code
    console.groupEnd(`${smt}`); */

// Counting
// console.count("Wes"); // Counts how many times that I used the variable.

// Timing
/*console.time("Fetching data");
fetch("https://api.github.com/users/wesbos")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("Fetching Data");
        console.log(data);
    });*/

// Table
/*console.table(group-of-things-which-have-features-in-common);*/

