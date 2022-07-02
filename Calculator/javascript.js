// WELCOME TO THE CALCULATOR PROJECT!
// Lets get the variables
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const displayBox = document.getElementById('processP');
const resultBox = document.getElementById('result');
const buttons = document.querySelectorAll('button');

// Define the basic functions
function add(num1,num2) {return parseFloat(num1) + parseFloat(num2)};
function subtract(num1,num2) {return parseFloat(num1) - parseFloat(num2)};
function multiply(num1,num2) {return parseFloat(num1) * parseFloat(num2)};
function divide(num1,num2) {return parseFloat(num1) / parseFloat(num2)};

"Create a new function 'operate' that takes an operator\
    and 2 numbers and then calls one of the above functions on the numbers."
function operate(operator,num1,num2) { return operator(num1,num2); }
buttons.forEach(button => button.addEventListener('click',getNum1));

let answer;
let displayValue;
let number1;
let number2;
let operator;
let emptyResult = false;
let waitForSign = false; // This is to prevent error bc of clicking an operator twice or more

function getNum1() {
    if(this.id != 'divide' && this.id != 'add' && this.id != 'multiply' && this.id != 'add' && this.id != 'subtract' && this.id != 'equals' && this.id != 'clear') {
        displayValue = this.textContent;
        resultBox.textContent += displayValue;
        number1 = resultBox.textContent;
        waitForSign = true;
    } else if (this.id == 'equals') {
        return;
    } else if (this.id == 'clear') {
        number1 = null;
        number2 = null;
        displayBox.textContent = '';
        resultBox.textContent = '';
    } else {  
        if(waitForSign) {
            operator = this.id;
            displayBox.textContent += number1 + ' ' + this.textContent + ' ';
            buttons.forEach(button => button.removeEventListener('click',getNum1));
            emptyResult = true;
            waitForSign = false;
            buttons.forEach(button => button.addEventListener('click',getNum2));
        }
    }
    return number1;
}
function getNum2() {
    if(this.id != 'divide' && this.id != 'add' && this.id != 'multiply' && this.id != 'add' && this.id != 'subtract' && this.id != 'equals' && this.id != 'clear') {
        if (emptyResult)  resultBox.textContent = '';
        displayValue = this.textContent;
        resultBox.textContent += displayValue; // 9 a bastiysam 9
        number2 = resultBox.textContent;
        emptyResult = false;
    } else if (this.id == 'equals') {
        if(operator == 'multiply') {
            answer = operate(multiply,number1,number2);
        } else if (operator == 'subtract') {
            answer = operate(subtract,number1,number2);
        } else if (operator == 'add') {
            answer = operate(add,number1,number2);
        } else if (operator == 'divide') {
            answer = operate(divide,number1,number2);
        }
        displayBox.textContent += ' ' + number2 + ' =';
        resultBox.textContent = answer;
        emptyResult = true;
    } else if (this.id == 'clear') {
        number1 = null;
        number2 = null;
        displayBox.textContent = '';
        resultBox.textContent = '';
        buttons.forEach(button => button.removeEventListener('click',getNum2));
        buttons.forEach(button => button.addEventListener('click',getNum1));
    } else {  
        if(operator == 'multiply') {
            answer = operate(multiply,number1,number2);
        } else if (operator == 'subtract') {
            answer = operate(subtract,number1,number2);
        } else if (operator == 'add') {
            answer = operate(add,number1,number2);
        } else if (operator == 'divide') {
            answer = operate(divide,number1,number2);
        }
        if (number2 == undefined) {
            answer = number1;
        }         
        resultBox.textContent = answer;
        emptyResult = true;
        number1 = answer;
        number2 = null;
        operator = this.id;
        displayBox.textContent = answer + ' ' + this.textContent;
        buttons.forEach(button => button.removeEventListener('click',getNum2));
        buttons.forEach(button => button.addEventListener('click',getNum2));        
    }   
}

