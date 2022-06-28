// When working with the DOM, we use "Selectors" to target the nodes
/*
    We can use them like we do in css: 
    div.display
    .display
    #container >.display
    div#container >div.display
*/
// We can also use relational selectors like firstElementChild
//  or lastElementChild etc.

const container = document.querySelector("#container");
// selects the #container div

console.dir(container.firstElementChild);
// Selects the first child of #container => .display

const controls = document.querySelector(".controls");
// selects the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display

"So, we're identifying a certain node based on its relationships to the nodes around it."

// NOTE:
/*
    When our HTML code is parsed by a web browser, it is converted to the DOM.
    One of the primary differences is that these nodes are objects that have many 
    properties and methods attached to them. These properties and methods are the
    primary tools we are going to use to manipulate our webpage with JS. We'll start
    with the query selectors - those that help you target nodes!
*/


// -element.querySelector(selector) returns a reference to the first match of selector
// -element.querySelectorAll(selector) returns a "nodelist" containing references to 
//      all of the matches of the selectors

// **** There are several other, more specific queries, that offer potential performance
//      benefits. But we won't be going over them now.

/* 
    !!! querySelectorAll does not return array but it looks like an array.
        to convert it we can use Array.from() or the spread operator. 
*/


"ELEMENT CREATION: "
// document.createElement(tagName, [options]) creates a new element of tag type tagName
// options in this case means you can add some optional parameters to the function
// EX:

const div = document.createElement("div");
/* 
    This function does NOT put your new element into the DOM - it simply creates it in 
    memory. This is so that you can manipulate the element (by adding styles, classes,
    ids, text, etc.) before placing it on the page. You can place the element into the DOM
    with one of the following methods...
*/
// Append Elements :
/* 
    parentNode.appendChild(childNode) appends childNode as the last child of parentNode
    parentNode.insertBefore(newNode,referenceNode) inserts newNode into parentNode before
    referenceNode
*/

// Remove Elements:
/*
    parentNode.removeChild(child) removes child from parentNode on the DOM and returns 
    a reference to child
*/

// Altering Elements:
/* 
    When you have a reference to an element, you can use that reference to alter the 
    element's own properties. This allows you to do many useful alterations, like adding
    or removing and altering attributes, changing classes, adding inline style information
    and more...
*/

const div2 = document.createElement('div');
document.body.appendChild(div2);
// Creates a new div referenced in the variable "div"

// Adding inline style: 

div2.style.color = "blue";
// adds the indicated style rule

// div2.styles.cssText = "color: blue; background: white;";
// adds several style rules.

div2.setAttribute("style","color:blue; background: white;")
// adds several style rules

div2.style.backgroundColor = "blue"; // access the div's background-color style
div2.style["backgroundColor"] = "red"; // also works
div2.style.cssText = "background-color: white;" // ok in a string

// Editing Attributes:

div.setAttribute("id","theDiv");
// if id exists, update it to "theDiv", else create an id with the value "theDiv";
// container.setAttribute("id","goddamnContainer"); // works!

console.log(div.getAttribute("id")); // returns theDiv
console.log(container.getAttribute("id")); // returns container
console.log(controls.getAttribute("class")); // returns controls


div.removeAttribute("id"); // Removes specified attribute

console.log(div.getAttribute("id")); // returns null

"Working With Classes:"

div2.classList.add('new');
// adds class "new" to your new div

div2.classList.remove('new');
// removes 'new' class from div

div.classList.toggle('active');
// if div doesn't have class 'active' then add it, or if it does,
//  then remove it!

"ADDING TEXT CONTENT!";

div2.textContent = "Hello World!";
// creates a text node containing 'Hello World!' and inserts in div

div2.outerHTML = `<span>Hello World!</span>`;
// renders the HTML inside div
/*
    Note that textContent is preferable for adding text, and innerHTML should be used
    sparingly as it can create security risks if misused!
*/

const content = document.createElement("div");
content.classList.add("contents");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const image = document.createElement("img");
image.src = "https://media-exp1.licdn.com/dms/image/C4D03AQGn6lsMxn-jsg/profile-displayphoto-shrink_800_800/0/1620594588387?e=1660780800&v=beta&t=GNqh7VLJvd98Y_ae2RtYfBsL9c0TclrP9RmRkvquc9o"
image.style.height = "100px";
image.style.width = "100px";
image.classList.add("ahmedImage");

controls.appendChild(image);

/* 
    Keep in mind that the JS does not alter your HTML, but the DOM - your HTML file
    will look the same, but the JS changes what the browser renders!
*/

// To make it comment use ctrl + / 

// Continue from exercise, starts with 'Copy the example above...'

const newImage = document.createElement("img");
newImage.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Enzo_Ferrari_x_2_%287262861958%29.jpg/1920px-Enzo_Ferrari_x_2_%287262861958%29.jpg")
//newImage.src = "https://tinyurl.com/3rtwydky"; // above is the alternative way
newImage.style.height = '500px';
content.appendChild(newImage);

/*--------------------------------------------------------------*/
"EXERCISE FROM TOP!"

const newContainer = document.querySelector(".newContainer");
newContainer.setAttribute("id","newContainer");

// a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.setAttribute("id","Redtext");
para.textContent = "Hey I'm red!";
para.style.color = "red";
newContainer.appendChild(para);
// an <h3> with blue text that says “I’m a blue h3!”
const header3 = document.createElement("h3");
header3.setAttribute("id","header3");
header3.textContent = "I'm blue h3!";
header3.style.color = "blue";
newContainer.appendChild(header3);
// a <div> with a black border and pink background color with the following elements inside of it:
const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
newDiv.style.cssText = "border: 2px solid black;background-color:pink;";
newContainer.appendChild(newDiv);
    // another <h1> that says “I’m in a div”
    const anotherH1 = document.createElement("h1");
    anotherH1.textContent = "I'm in a div"; 
    anotherH1.style.backgroundColor = "inherit";
    newDiv.appendChild(anotherH1);
    // a <p> that says “ME TOO!”
    const newPara = document.createElement("p");
    newPara.textContent = "ME TOO!";
    newPara.style.backgroundColor = "inherit";
    newDiv.appendChild(newPara);
        // Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. // really needed?

/*---------------------------------------------------------------------------*/
"EVENTS:"
/*
    Now that we have handle on manipulating the DOM with JS, they next step is learning how
    to make that happen dynamically, or on demand! Events are how you make that magic happen
    on your pages. Events are actions that occur on your webpage such as mouse-clicks or 
    keypresses, and using JS we can make our webpage listen and react to these events.

    There are three primary ways to go about this; you can attach functions'attributes
    directly in your HTML elements, you can set the "on_event_" propery on the DOM object
    in your JS, oryou can attach event listeners to the nodes in your JS. Event listeners
    are definetely the preferred method, but you will regularly see the others in use,
    so we're going to cover all three!

    We're going to create 3 buttons that all alert("Hello World" when clicked.
*/





"method 1;"

// See html line: 35
// !!! This solution is less than ideal because we're cluttering our HTML with JS.
        // Also, we can only have 1 "onclick" per element.
"Method 2"

const btn = document.querySelector("#btn1");
btn.onclick = () => alert("Hello There!");
btn.style.cssText = "height:80px;width:240px;";

// This is a little better. We've moved the JS out of the HTML and into a JS file, but
//  we still have the problem that a DOM element can only have 1 "onclick" property

"Method 3"

const btn2 = document.querySelector("#btn2");
const surpriseIMG = document.createElement("img");
let timesClicked = 0;
btn2.addEventListener("click", () => {
    let imageShow = true;
    timesClicked++;
    surpriseIMG.src = "https://www.telemundo.com/sites/nbcutelemundo/files/styles/nbcnews-fp-1200-630/public/kylie_tyga_mexico2.jpg?ramen_itok=iqwQftIcTf";
    surpriseIMG.style.cssText = "height:400px;width:700px";
    if (timesClicked == 2){
        surpriseIMG.src = "https://i.pinimg.com/originals/e1/a6/bb/e1a6bbeb3a246d52ea1dd358a304df25.jpg";
        surpriseIMG.style.cssText = "height:650px;width:475px";
    } else if (timesClicked == 3) {
        imageShow = false;
        timesClicked =0;
    }
    if (imageShow == true) { 
        document.body.appendChild(surpriseIMG);
    } else {
        document.body.removeChild(surpriseIMG);     
    }
})

/* Now, we maintain separation of concerns, and we also allow multiple event listeners
if the need arises. Method 3 is much more flexible and powerful, though it is  a bit
more complex to set up! */


// // NOTE THAT: All 3 of these methods can be used with named funtions like so:

// // Method 1
/*
function alert(function()) {
    alert("YAY! YOU DID IT!");
}

// // Method 2 

btn.onclick = alertFunction;

// // Method 3 

btn.addEventListener("click",alertFunction);
*/



// // !!! With all three methods we can access more information about the event y
// //  passing a parameter to the function that we are calling: 

btn.addEventListener("click",function(e) {
    console.log(e); // function (e) is a callback from addEventListener.
})

/* The e in that function is an object that references the event itself. Within
    that object you have access to many useful properties and functions such as which
    mouse button or key was pressed, or information about the event's target - the DOM node
    that was clicked! Lets try this:
*/

console.log("-----------------------------------------------------------")
btn.addEventListener("click",function(e){
    console.log(e.target); // <button id="btn1" style="height: 80px; width: 240px;">Click me Dude!</button>
})


btn.addEventListener("click", function(e){ 
    e.target.style.background = "blue"; // Updates the button's background color to blue!
})

/*------------------------------------------------------------------------*/
"UNDERSTANDING THE CALLBACKS!"
const notes = ['do','re','me'];
// // notes.forEach((note) => console.log(note)); // Does the same thing as below
// // for (note of notes) console.log(note); // Does the same thing above
//  notes.forEach(function(note) { console.log(note); }) // Same as above
//  notes.forEach(console.log); // This is pretty much the same as above

// // IMPORTANT NOTE: Callbacks are just functions passed into 
// //  other functions as arguments (as a parameter)


// // Iterator Functions: 

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]); // This is when the callback function gets called, or executed
    }
}

const myArry = [2,3,4,2];
// myForEach(myArry, (item) => { console.log(item + 2); })
// // We do not need the '()' in this case, as we only have one argument
// myForEach(myArry, item => console.log(item + 4));

// // We can pass arguments to this kind of anonymous functions 
// myForEach(myArry,function(item) {
//     console.log(item + 7);
// });


// // This time we are declaring the function we want to use as callback
// // Notice we define 'item' as a parameter to be passed in when it's called by
// //   the 'myForEach' function.
function printItemPlusTwo(item) {
    console.log(item + 2);
}
console.log("-----------------------------------------------")


// // 'item' is passed into the function, we do not need to declare it here cuz we declared it elsewhere
// // It is the same as the 'console.log' example above except we declared our own fucntion
// myForEach(myArry,printItemPlusTwo);

// // Another example of how callbacks work might be the .map method: 

function myMap(array,callback) {
    const myNewArray = [];
    for (let i = 0; i < array.length;i++) {
        const callbackResult = callback(array[i]);
        myNewArray.push(callbackResult);
    }
    return myNewArray;
}


const newArray = myMap([1,2,3,4], callThis => callThis + 2);
// console.log(newArray);


// // Event Listeners (DOM);

const element = document.querySelector("#btn2");

element.addEventListener("click", event => {
    console.log(event.target.value); // returns nothings since there is no value returning
    // // event is passed into the callback from the '.addEventListener'
    // //   when it recieves a 'click' event
})

function myEventHandler(event) {
    console.log((event.target));
}
element.addEventListener('click',myEventHandler);