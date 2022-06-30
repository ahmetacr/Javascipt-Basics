// WELCOME TO THE CALCULATOR PROJECT!
// Lets first get our variables
// First the operators!
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');
// And then the numbers:
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const zeroBtn = document.getElementById('zero');
// And the equal sign
const equalsBtn = document.getElementById('equals');
// And the clear Button
const clearBtn = document.getElementById('clear');
// And the display box
const displayBox = document.getElementById('resultP');



// Define the basic functions
function add(num1,num2) {return num1 + num2};
function subtract(num1,num2) {return num1 - num2};
function multiply(num1,num2) {return num1 * num2};
function divide(num1,num2) {return num1 / num2};

"Create a new function 'operate' that takes an operator\
    and 2 numbers and then calls one of the above functions on the numbers."
function operate(operator,num1,num2) {
    operator(num1,num2);
}

"Create the functions that populate the \
  display when you click the number buttons \
   you should be storing the 'display value' \
    in a variable somewhere for use in the next step."

let displayValue;
buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',() => {
    displayValue = button.textContent;
    displayBox.textContent = displayValue;
}))
