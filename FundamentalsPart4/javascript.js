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







