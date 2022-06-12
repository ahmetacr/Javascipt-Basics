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



// Continue from exercise, starts with 'Copy the example above...'