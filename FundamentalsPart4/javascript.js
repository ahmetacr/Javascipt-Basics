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





