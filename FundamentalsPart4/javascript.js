"IN THIS PROJECT, WE ARE GOING TO BE WORKING ON ARRAYS, BUILT-IN ARRAY FUNCTIONS"
"AND LOOPS"

// LETS START WITH ARRAYS!
/* AN array is a special variable, which can hold more than one value: */
const cars = ["Saab","Volvo", "BMW"];
// console.log(typeof(cars));
// You can also create an array, and then provide the elements:
const carsArray = [];
carsArray[0] = "BMW";
carsArray[1] = "Volvo";
carsArray[2] = "Saab";
// console.log(carsArray); // ['BMW','Volvo','Saab']

// Also you can use the New keyword to create an array:
const carsArray1 = new Array("Mercedes","Audi","BMW");
// console.log(carsArray1);

// We can access an array element by referring to the index number:
let aCar = cars[0];
// console.log(aCar); // Saab
// console.log(typeof(aCar)); // String


// We can also change the element value in an array 
//(even though it is created by using const)

// console.log(cars[0]); // Saab
cars[0] = "Opel";
// console.log(cars[0]); // Opel

/* We can also access a full array by referring to the array name; */

document.getElementById("demo").outerHTML = "DEMO:" + cars;


/* Arrays are a special type of objects. But JS arrays are best described as arrays
Arrays use numbers to access its "elements like cars[0]".
Objects use names to access its "members": For example: */

const personArray = ["John","Doe",46];
// console.log(personArray[0]); // Returns John
const personObject = {firstName:"John",lastName:"Doe",age:46};
// console.log(personObject.firstName) // Returns John

/* Array Elements Can Be Objects: */
// You can have objects in an array. You can have functions in an Array. You can even have
//      arrays in an Array.

const myArray = []
myFunction = function(){};
const myCars = []
myArray[0] = Date.now();
myArray[1] = myFunction;
myArray[2] = myCars;
// console.log(myArray);


"Array Properties and Methods:"

// length property:
const fruits = ["Banana","Strawberry","Orange","Apple"];
// console.log(fruits.length); // Returns 4
//!!! Length property is always one higher than the highest index of an array!!!!
// Which helps us to access the last element of the array in this way:
let LastFruit = fruits[fruits.length - 1];
// console.log(LastFruit); // Apple
// console.log(fruits[-1]);// Doesn't work like python!

// Sort property:
// console.log(fruits.sort()) // Sorts them in alphabetic order

"Looping Array Elements:"
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits.sort()[i] + "</li>" 
}
text += "</ul>"
// console.log(text);
// document.getElementById("demo").outerHTML = "DEMO:" + cars;
document.getElementById("ListingTrial").outerHTML = text;


"Adding Array Elements: "
fruits.push("Lemon");; // adds a new element to fruits array
// console.log(fruits);

// We can also use length property to add new elements to an array:
fruits[fruits.length] = "Mango";
// console.log(fruits);


//fruits[10] = "Blueberries" // Length of the array is 7!
// console.log(fruits); // Adding elements with high indexes can create undifined holes in an array!

/* Associative Arrays: 
Many programming languages support arrays with named indexes.
Arrays with named indexes are called associative arrays or hashes.
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes. 
*/

// So, when you want the element names to be strings(text) you should use "objects".
// When you want the element names to be numbers you should use "arrays"

"While creating an Array myArray = [] is better than myArray = new Array()"
// It is because the new function may lead to some unexpected errors.

"the typeof() problem: "
/* When we create an Array and check for its type, it shows an Object.
However, we all know that Arrays are different than Objects
So, to make sure we are dealing with an Array rather than an Object
we use two methods: 
1 =  the Array.isArray(nameOftheArray) function to make sure it is!  
2 =  we use the instanceof operator which returns true if an object
is created by a given constructor. */

//Example for solution 1
// console.log(typeof(fruits)); // returns object
// console.log(Array.isArray(fruits)); // Returns true which means the 'fruits' is an Array!

// Example for solution2
// console.log(fruits instanceof Array); // Returns true which again means that 'fruits' is an Array


/* Converting Arrays to Strings: */ 

// console.log(fruits.toString()); // Apple,Banana,Orange,Strrawberry,Lemon,Mango
document.getElementById("demo2").outerHTML = fruits.toString();

// We also have the join() method to do the same exact thing, but in addition
//      you can also specify the separator.

// console.log(fruits.join(" ")); // Apple Banana Orange Strrawberry Lemon Mango

// We use pop() and push() to remove and add elements to an Array:
// pop() method removes the last element on the Array:
// console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Strawberry', 'Lemon', 'Mango']
// console.log(fruits.pop()); // It returns the value that was "popped out"
// console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Strawberry', 'Lemon']


// Push() method adds a new one
fruits.push("Kiwi");
// console.log(fruits);



// There is also the shift() method which removes the first array element and "shifts"
//  all other elements to lower index.

// console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Strawberry', 'Lemon', 'Kiwi']
fruits.shift(); // It also returns the element which has shifted out 
// console.log(fruits); // ['Banana', 'Orange', 'Strawberry', 'Lemon', 'Kiwi']

// There is the unshift() method which adds a new element to an array (at the beginning),
//  and "unshifts" older elements.

// console.log(fruits); // ['Banana', 'Orange', 'Strawberry', 'Lemon', 'Kiwi']
fruits.unshift("Pineapple");
// console.log(fruits); // ['Pineapple', 'Banana', 'Orange', 'Strawberry', 'Lemon', 'Kiwi']

// JS Array Delete()
"!!!!!!!!!WARNING!!!!!!!!!" /*
Array elements can be deleted using the JS operator 'delete'.
Using 'delete' leaves 'undefined' holes in the array.
Use pop() or shift() instead. */

// console.log(fruits); // ['Pineapple', 'Banana', 'Orange', 'Strawberry', 'Lemon', 'Kiwi']
delete fruits[0]; 
// console.log(fruits); // [empty, 'Banana', 'Orange', 'Strawberry', 'Lemon', 'Kiwi']
// Left empty!


"Merging (Concatenating) Arrays: "
// The concat() method creates a new array by merging (concatenating) existing arrays;

const myBoys = ["Ahmet","Mehmet","Sadik"];
const myGirls = ["Zeynep","Fatma","Ayse"];

const myChildren = myGirls.concat(myBoys); // First myGrils and then myBoys
// console.log(myChildren); // ['Zeynep', 'Fatma', 'Ayse', 'Ahmet', 'Mehmet', 'Sadik']

"The concat() method does not change the existing arrays. It always returns a new array."
"Also it can take any number of array arguments."

const arr1 = ["Iphone4","Iphone5"];
const arr2 = ["Iphone6","Iphone7","Iphone8"];
const arr3 = ["Iphone10","Iphone11","Iphone12","Iphon13"];
const arr4 = ["Iphone14"];

const iphones = arr1.concat(arr2,arr3,arr4); 
// console.log(iphones); // ['Iphone4', 'Iphone5', 'Iphone6', 'Iphone7', 'Iphone8', 'Iphone10', 'Iphone11', 'Iphone12', 'Iphon13', 'Iphone14']

"concat() method can also take strings as arguments."

const namesArray = ["Asli","Seda","Betul"];
const myKids = namesArray.concat("Peter");
// console.log(myKids);

"Splicing and Slicing Arrays"
// splice():

// console.log(fruits); // [empty, 'Banana', 'Orange', 'Strawberry', 'Lemon', 'Mango', 'Kiwi']
fruits.splice(2,0,"Cherry","Watermelon")
// first parameter (2) defines the position where new elements should be added (spliced in)
// second parameter (0) defines how many elements should be removed.
// console.log(fruits); // [empty, 'Banana', 'Cherry', 'Watermelon', 'Orange', 'Strawberry', 'Lemon', 'Mango', 'Kiwi']

const fruitsNew = ["Elma","Armut","Karpuz"];
fruitsNew.splice(1,2, "Kavun","Cilek");
// console.log(fruitsNew); // ['Elma', 'Kavun', 'Cilek']

// slice(): 

// console.log(fruitsNew); // ['Elma', 'Kavun', 'Cilek']
let slicedFruits = fruitsNew.slice(1); // Slices from 1 to end
// console.log(slicedFruits);


slicedFruits = fruits.slice(2,5); // Starting from 2.element till 5.th element but 5 not included
// console.log(slicedFruits);

"AUTOMATIC toString()"
/* 
    JS automatically converts an array to a comma separated string
    when a primitive value is expected.
    This is always the case when you try to output an array.
    These two examples will produce the same result:
*/
 
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
*/

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits; 
*/


"All JavaScript objest have a toString() method."


/*---------------------------------------------------------------------*/
"Here we are going to work on the loops on JavaScript!"
/* Loops are all about doing the same thing over and over again. 
Often, the code will be slightly different each time round the loop,
or the same code will run but with different variables. */

"Lets start with the for ... of loop: "
// The basic tool for looping through a collection is the for...of loop:
const cats = ["Leopart","Serval","Jaguar","Tiger","Caracal","Lion"];
// for (const cat of cats) console.log(toUpper(cat));
for (const cat of cats.sort()) {
    //console.log(cat);
}
/*
    In the example above, for (const cat of cats) says:
        1.Given the collection 'cats',
            get the first item in the collection.
        2.Assign it to the variable 'cat' and then
            run the code between the curly brackets {}.
        3.Get the next item, and repeat (2) 
            until you've reached the end of the collection
*/

"map() and filter()"
// JavaScript also has more specialized loops for collections, 
//   and we'll mention two of them here

// map() can be used to do something to each item in a collection and
//   create a new collection containing the changed items:

let toUpper = (string) => string.toUpperCase();

const upperCats = cats.map(toUpper);
// console.log(upperCats); // ['CARACAL', 'JAGUAR', 'LEOPART', 'LION', 'SERVAL', 'TIGER']

/* 
    Here we pass a funtion into cats.map(), and map() calls the function once
    for each item in the array,passing in the item. It then adds the 
    return value from each function call to a new array, and finally
    returns the new array. In this case the function we provide converts
    the item to uppercase, so the resulting array contains all our cats in uppercase!
*/


// filter() can be used to test each item in a collection, and create a new collection
// containing only items that match

let lCat = (cat) =>  cat.startsWith("L");

const filtered = cats.filter(lCat);
// console.log(filtered); // ['Leopart', 'Lion']
// console.log(Array.isArray(filtered)); // True

/* 
    It looks like the map(), except the function we pass in returns
    a boolean: if it returns true, then the item is included in 
    the new array. Our function tests that the item starts with 
    the letter "L",so the result is an array containing only cats whose names 
    start with "L"
*/


// Note that map() and filter() are both often used with function expressions
//  Using function expressions we could rewrite the example above to be much
//      more compact

const filteredAgain = cats.filter((cat) => cat.startsWith("L"));
// console.log(filteredAgain); // ['Leopart','Lion']


"The Standard for loop: "
/*
    for(initializer; condition; final-expression) {
        // code to run
    }
*/
/*
const results = document.querySelector('#results');

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += '\n...finished!';
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => results.textContent = '');
*/
const results = document.querySelector("#results");
function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}` + `\n`;
    }
  results.textContent += '\n...finished!';
}
const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');
calculateBtn.addEventListener("click",calculate);
clearBtn.addEventListener("click", () => results.textContent = "");


// Looping through collections with a for loop: 
/* 
    We have already used the for...of loop to iterate through a collection
    but now we are going to be using the regular for loop to do the same.
    Here is the example that we did: 
    
    const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
    
    for (const cat of cats) {
    console.log(cat);
    }

    Now we are going to be rewriting the same loop:
*/

for(i = 0; i < cats.length; i ++) {
    // console.log(cats[i]);
}

let myFavCats = "My cats are called: ";
for (const cat of cats) {
    //myFavCats = (`${myFavCats} ${cat},`);
}
// console.log(myFavCats);


for (i = 0; i < cats.length; i++) {
    if (i < cats.length-1) {
        myFavCats += (`${cats[i]}, `);
    } else {
        myFavCats += (`and ` + `${cats[i]}`);
    }
}
// console.log(myFavCats);


// Exiting Loops with break: 
// a break statement will immediately exit rthe loop amd make
//  the browser move on to any code that follows it.


// Lets make a search contact example:
const contacts = ["Ahmet:607-677-5251","Mehmet:210-665-5251",
                    "Selim:650-297-89-84","Recep:218-266-1512"]

const contactInput = document.querySelector("#search");
const contactBtn = document.querySelector("#contactButton");
const para = document.querySelector("#contactText") 



contactBtn.addEventListener("click", () =>{    
    let answer = "";
    for (let contact = 0; contact < contacts.length;contact++) {
        if (contactInput.value == ""){
            answer = "Please enter the contact to search for!";
            break
        } else if (contacts[contact].toLowerCase().includes(contactInput.value.toLowerCase())) {
            answer = [`${contacts[contact].split(":")[0]}'s number is: ${contacts[contact].split(":")[1]}`]
            // answer = contacts[contact];
            break;
        } else {
            answer = "Sorry, contact not found!"
        }
    } para.textContent = answer;
});

"Skippking Iterations with Continue; "
/* 
    The 'continue' tatement works in a similar manner to 'break',
    but instead of breaking out of the loop entirely, it skips 
    to the next iteration of the loop, Let's look at another example 
    that takes a number as an input, and returns only the numbers that 
    are squares of integers (whole numbers).
 */

const numberInput = document.querySelector("#square");
const squareBtn   = document.querySelector("#squareButton");
const squareText  = document.querySelector("#squareText");

squareBtn.addEventListener("click", () => {
    let resultText = "Output: "
    inputNumber = numberInput.value;
    if (inputNumber == '') {
        resultText = "Please enter a number!";
    }
    for (let i = 1; i <= inputNumber; i++) {

        if (Math.sqrt(i) == (Math.floor(Math.sqrt(i)))) {
            resultText += ` ${i}\n`;    
        }  else {
            continue;
        }
    }
    squareText.textContent = resultText;


});

/* Same Example another solution:
    const para = document.querySelector('p');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');

    btn.addEventListener('click', () => {
    para.textContent = 'Output: ';
    const num = input.value;
    input.value = '';
    input.focus();
    for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
        continue; // It uses continue to skip the non-integer values.
        }
        para.textContent += `${i} `;
    }
    });
*/

/*--------------------------------------------------*/
"while and do..while: "
/* Syntax:
    initializer
    while (condition) {
        // code to run
    
        final-expression
    }
This works in a very similar way to the 'for' loop,
except that the initializer variable is set before 
the loop, and the final-expression is included inside
the parentheses. The condition is included inside the
parantheses, which are preceded by the 'while' keyword
rather than 'for'.
*/

// Lets define the myFavoriteCats variable again using while loop:

let myFavoriteCats = "My cats are called: "
let cat = 0;

while (cat < cats.length) {
    if (cat < cats.length-1) {
        myFavoriteCats += (`${cats[cat]}, `);
    } else {
        myFavoriteCats += (`and ` + `${cats[cat]}`);
    }
    cat++;
}
// console.log(myFavoriteCats); // My cats are called: Caracal, Jaguar, Leopart, Lion, Serval, and Tiger


"do...while loop: "
/* Syntax:
    initializer
    do {
        // code to run

        final-expression
    } while (condition)
*/
"IMPORTANT!"
/* 
    The main difference between a 'do...while' loop and a 'while' loop is that the 
    code inside a 'do...while' loop is always executed at least once. That's becuase
    the condition comes after the code inside the loop. So we always run that code,
    then check to see if we need to run it again. In 'while' and 'for' loops, the check
    comes first, so the code might never executed.
*/



do {
    console.log("AHMET")
} while(false); // Returns AHMET at once in the console!

// Lets find the fav cats using do...while loop at this time:
// console.log(cats); // ['Caracal', 'Jaguar', 'Leopart', 'Lion', 'Serval', 'Tiger']
cat = 0;
let myFavs = ""
do {
    if (cat < cats.length-1) {
        myFavs += (`${cats[cat]}, `);
    } else {
        myFavs += (`and ` + `${cats[cat]}`);
    }
    cat++;
} while(cat < cats.length);
// console.log(myFavs); // Caracal, Jaguar, Leopart, Lion, Serval, and Tiger


/*------------------------------------------------------------------------------------*/
/* 
    let output = document.querySelector('.output');
    output.innerHTML = '';
    let i = 10;
    while (i >= 0) {
        const para = document.createElement('p');
        para.textContent = "";
        if (i == 10) {
            para.textContent += "Countdown 10";
            output.appendChild(para);
        } else if (i == 0) {
            para.textContent = "Blast Off!"
            output.appendChild(para);
        } else {
            para.textContent += i
            output.appendChild(para);
        }
        i--;
    } 
*/
// The code above is a solution for https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_launch_countdown


"Continue from the link below: "
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_filling_in_a_guest_list





















































