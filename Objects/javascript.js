// In this project, we are going to cover the Objects in JavaScript!
/* Going to cover;
    - Creating objects,
    - Accessing object properties,
    - Being able to use multiple object operators,
    - Being able to use some powerful array functions.
*/

// Creating an empty object
let user = new Object(); // Object constructor syntax
let user1 = {}           // Object literal syntax

let user2 = {     // An object
    name: "John", // The key 'name' store value 'john'
    age: 30       // The key 'age' store value 30
};
Infinity

let key = 'likes birds';

user4[key] = true;
// console.log(user4);


// Here, the variable 'key' may be calculated at run-time or depend on the user input. 
//  And then we use it to access the property. That gives us a great deal of flexibility.

let user5 = {
    name: 'Jonh',
    age : 30,
};

// let key1 = prompt("What do you know about the user?","name");

// console.log(user5[key1]); // John (if enter 'name');
// the dot notation cannot be used in the same way. user5.key // undifined!

"COMPUTED PROPERTIES: "

// We can use square brackets in an object litera, when creating an object. 
//  That's called computed properties:

// let fruit = prompt('Which fruit to buy?','apple');

let bag = {
    //[fruit]: 5, // The name of the property is taken from the variable fruit
}
// console.log(bag.apple); // 5 if fruit='apple'

// The meaning of a computed property is simple: [fruit] means that the property name 
//  should be taken from fruit.

// So, if a visitor enters 'apple',bag will become {apple:5}

// Essentially, that works same as:

// let fruit = prompt("Which fruit to buy?","apple");
let bag1 = {};

// Take property name from the fruit variable.
// bag1[fruit] = 5;
// console.log(bag1); // {<fruit>: 5};

// We can use more complex expressions inside square brackets.

let fruit1 = 'apple';
let bag2 = {
    [fruit1 + 'Computers']: 5 // bag.appleComputers = 5
}
// console.log(bag2);

/*
    So most of the time, when property names are known and simple, the dot is used. And if 
    we need something more complex, then we switch to square brackets.
*/

"Property Value Shorthand: "

// In real code, we often use existing variables as values for property names.

// For ex:

function makeUser(name,age) {
    return {
        name: name,
        age: age,
        // ... other properties
    };
}

let user6 = makeUser("John",40);
// console.log(user6.age);

/*
    In the example above, properties have the same names as variables. The use-case of 
    making a property from a variable is so common, that there's a special property value 
    shorthand to make it shorter.
*/
// Instead of name:name we can just write name, like this;

function makeUser1(name,age) {
    return {
        name, // same as name:name
        age,  // same as age:age
    }
}

// We can use both normal properties and shorthends in the same object.
let user7 = {
    name, // same as name:name
    age:30
};

"Property Names Limitations:"

/*
    As we already know, a variable cannot have a name equal to one of the language-reserved
    words like 'for' let' 'return' etc.
*/
// But for an object property, there's no such restriction:

let obj  = {
    for:1,
    let:2,
    return:3,
};
// console.log(obj.for + obj.let + obj.return); // 6


// In short, there are no limitations on property names. They can be any string or symbols
//  (a special type for identifiers, to be covered later).

// Other types are automatically converted to strings.
// For instance number 0 becomes string '0' when used as a property key.

let obj2 = {
    0: 'test' // same as '0':"test"
}

// console.log(obj2['0']); // both returns test
// console.log(obj2[0]);   // both returns test

/*
    There's a minor gotcha with a special property name __proto__. we can't set it to a 
    non-object value:
*/

let obj3 = {};
obj3.__proto__ =5; // assign a number
// console.log(obj3.__proto__); // Didn't work as intended


let user8 = {};
// console.log(user8.noSuchProperty === undefined); // true means 'no such property'


// There's also a special operator 'in' for that.

// 'key' in object
// EX:

let user9 = {name: 'Jonathan', age: 35};
// console.log('age' in user9 ); // True, user.age exist
// console.log('asdasd' in user9); // false, user.asdasd. doesn't exist


/*
    Please note that on the left side of 'in' there must be a property name,
    That's usually a quoted string.

    If we omit quotes, that means a variable should contain actual name to be tested.
    For example:
*/

let user0 = {age:30};
let key2 = 'age';
// console.log(key2 in user0); // true, propery 'age' exists


/*
    Why does 'in' operator exists? Isn't it enough to compare agains undefined?
    Well, most of the time the comparison with undefined works fine. But there's a 
    special case when it fails, butr 'in' works correctly.

    It's when an object property exists but stores undefined.
*/



let obj4 ={
    test: undefined,
};



// console.log(obj4.test); // it's undefined, so - no such property???
// console.log('test' in obj4); // true!! the property exist!

"THE 'for...in' loop! "

/*
    To walk over all keys of an object, there exists a special form of the loop: for...in
    This is a completely different from the for(;;;) construct that we studied before.

    The syntax:

    for(key in object) {
        // executes the body for each key among object properties.
    }
*/

// For instance, let's output all properties of user11:

let user11 = {
    name:'john',
    age:30,
    isAdmin:true,
};

for (let key in user11) {
    // keys
    // console.log(key); // name, age, isAdmin
    // values for the keys
    // console.log(user11[key]); // John, 30, true
}

"ORDERED LIKE AN OBJECT:"

/*
    Are objects ordered? In other words, if we loop over an object, do we get all properties
    in the same order they were added? Can we rely on this?

    The sort answer is: 'ordered in a special fashion': integer properties are sorted, others
    appear in creation order. The details follow.

    As an example, let's consider an object with the phone codes:
*/

let codes = {
    '49': 'Germany',
    '41': 'Switzerland',
    '44': 'Great Britain',
    // ...
    '1': 'USA',
};

for (let code in codes) {
    // console.log(code);
}
/*
     The object may be used to suggest a list of options to the user. If we're making a 
     site mainly for a German audience then we probably want 49 to be the first.

     But if we run the code, we see a totally different picture.

     - USA(1) goes first
     - then Switzerland (41) and so on.

    The phone codes go in the ascending sorted order, because they are integers. So we see
    1,41,44, 49.
*/


// On the other hand, if the keys are non-integer, then they are listed in the creation order
let user12 = {
    name:'John',
    lastName:'Drakula',
};
user12.age = 25; // add one more

for (let prop in user12) {
    // console.log(prop); //name, lastName,age
}

/*          SUMMARY
    Objects are associative arrays with several special features.
    They store properties (key-value pairs), where:
    - Property keys must be strings or symbols (usually strings)
    - Values can be of any type.

    To access a property, we can use:
    - The dot notation: obj.property.
    - Square brackets notation: obj['propperty']. Square brackets allow taking
      the key from a variable, like obj[varWithKey].

    Additional Operators:
    - To delete a property: delete obj.prop
    - To check if a property with the given key exists: 'key' in obj.
    - To iterate over an object: for (let key in obj) loop.

    What we've studied so far is called a 'plain object', or just object.

    There are many other kinds of objects in JavaScript:
    - Array: to store ordered data collections,
    - Date: to store the information about the date and time,
    - Error: to store the information about an error,
    - ... and so on.
*/

// console.log(user8.noSuchProperty === undefined); // true means 'no such property'

function isEmpty(obj) {
    for (let key in obj) return false; return true;
}
let schedule = {};
// console.log(isEmpty(schedule));


let salaries = {
    John:100,
    Ann: 160,
    Pete:130,
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
// console.log(sum);

let menu = {
    widht:200,
    height:300,
    title:'myMenu',
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if(Number.isInteger(obj[key])) {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);
// console.log(menu);

/*
    Let's see how MND tutorial goes with objects!
*/

// const person = {
//     name: ['Bob','Smith'],
//     age:32,
//     bio: function() {
//         console.log(`${this.name[0]} ${this.name[1]} 
//         is ${this.age} years old.`);
//     },
//     introduceSelf: function() {
//         for (i in this.name) {
//             console.log(`Hello! I'm ${this.name[i]}`);
//         }
//     }
// }
// console.log('-----------------------')
// console.log(person.introduceSelf());
// console.log(person.name);


// We can also use objects as object properties!
const person = {
    name: {
        first: 'Bob',
        last: 'Smith',
    },
    age: 32,
    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old!`);
    },
}

// console.log(person.bio());
// console.log(person.name.last);


"Bracket Notation: "

// instead of person.name.first we can use:
// console.log(person['name']['first']); // Bob!


"Setting Object Members: "
person.age = 45;
person.name.last = 'Acar'
// console.log(person.name.last);
person['name'].last = 'Turk';
// console.log(person.name.last);
person.name['first'] = 'Seda';
// console.log(person['name'].first); // we can use different combinations together!

// can also change or create new functions:
person['eyes'] = 'hazel';
person.farewell = function() {
    console.log('Bye Everybody!');
}
// console.log('eyes:' + person['eyes']);
// console.log(person.farewell());

// We can also add member names using bracket notation 

const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;

// console.log(person);


"What is 'This'?"

/*
    The 'this' keyword refers to the current object the code is being 
    written inside -- so in this case 'this' is equivalent to person.
    So, why not just write 'person' instead? 

    Well, when you only have to create a single object literal, it's not 
    so useful. But if you create more than one, this enables you to use 
    the same method definition for every object you create.

    Let's illustrate what that means:
*/


const person1 = {
    name:'Chris',
    introduceSelf() {
        // console.log(`Hi! I'm ${this.name}.`)
    }
}

const person2 = {
    name:'Deepti',
    introduceSelf() {
        // console.log(`Hi! I'm ${this.name}.`)
    }
}

/* 
    In this case, person1.introduceSelf() outputs 'Hi! I'm Chris.';
    person2.introduceSelf() on the other hand outputs 'Hi! I'm Deepti.', 
    even though the method's code is exactly same in each case. This isn't 
    hugely useful when you are writing out object literals by hand,
    but it will be essential when we start using constructors to create more 
    than one object fomr a single object definition, and that's the subject of 
    the next section!
*/



"INTRODUCING CONSTRUCTORS: "

/*  
    Using object literals is fine when you only need to create one object,
    but if you have to create more than one, as in the previous section,
    they're seriously inadequate. We have to write out the same code for every 
    object we create, and if we want to change some properties of the object -
    like adding a height property - then we have to remember to update every 
    object!
    
    We would like a define the 'shape' of an object -- the set of methods and the 
    properties it can have -- and then create as many objects as we like, just updating 
    the values for the properties that are different.

    The first version of this just a function:
*/




function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function() {
        console.log(`Hi! I'm ${this.name}.`)
    }
    return obj;
}
ahmetObj = createPerson('ahmet');
// console.log(ahmetObj.introduceSelf());
/*
    This function creates and returns a new object each time we call it.
    The object will have two members:
    - A property name
    - A method called introduceSelf()

    Note that createPerson() takes a parameter name to set the value of the name
    property, but the value of the introduceSelf() method will be the same for all
    objects created using this function. This is a very common pattern for creating 
    objects.

    Now we can create as many objects as we like, reusing the definition.
*/


const selva = createPerson('Selva');
// console.log(selva.name);
// console.log(selva.introduceSelf());

const frankie = createPerson('Frankie');
// console.log(frankie.name);
// console.log(frankie.introduceSelf());


/*
    This works fine but is a bit long-winded: we have to create an 
    empty object, initialize it, and return it. A better way is to use a 'constructor'.
    A constructor is just a function called using the new keyword. When you call a
    constructor, it will:
     - Create a new object,
     - Bind this to the new object, so you can refer to this in your constructor code.
     - run the code in the constructor
     - return the new object.

    Contructors, by convention, start with a capital letter and are named for the type
    of object they create. So we could rewrite our example like this:
*/



function Person(name) { // no initializer like const obj
    this.name = name;
    this.introduceSelf = function() {
        // console.log(`Hi! I'm ${this.name}.`);
    }
}                       // no returning like return obj

const salva = new Person('Salva'); // To call Person() as a constructor, we use new:
// console.log(salva.name);

/* You've been using objects all along!!!:
    As you've been going through these examples, you have probably been thinking that
    the dot notation you've been using is very familiar. That's because you've been 
    using it throughout the course! Every time we've been working through an example 
    taht uses a built-in API or JS object, we've been using objects, because such
    features are built using exactly the same kind of object structures that we've 
    been looking at here, albeit(although) more complex ones than in our own basic
    custom examples.

    So when you used string methods like:

    myString.split(',');

    You were using a method available on a String object. Every time you create a string
    in your code, that string is automatically created as an instance of String, and therefore
    has several common methods and properties available on it.

    When you accessed the document object model using lines like this:

    const myDiv = document.createElement('div');
    const myVideo = document.querySelector('video');

    You were using methods available on 'Document' object. For each webpage loaded,
    an instance of 'Document' is created, called document, which represents the entire
    page's structure, content, and other featurs as its URL. Again, this means that it 
    has several common methods and properties available on it.

    The same is true of pretty much any other built-in object or API you've been using
    --Array,Math, and so on.

    Note that built in objects and APIs don't always create object instances automatically.
    As an example, the Notifications API --- which allows modern browsers to fire system
    notifications -- requires you to instantiate a new object instance using the constructor
    for each notification you want to fire. Try entering the following into your JS console.
*/

myNotification = new Notification('Hello!');

// Object examples:

const seksendort = {
    name:'SeksenDort',
    nationality: 'Turkish',
    genre:'Rock',
    members:['Tuna Velibasoglu','Umitcan Tuncer','Serter Karadeniz','Ismail Okan Ozen'],
    formed:2005,
    split:false,
    albums: [
        {name:'Akiyor Zaman',
        released:2011},
        {name:'Ruya',
        released:2012},],
}

let bandInfo = `The ${seksendort.nationality} ${seksendort.genre} Band ${seksendort.name} has
    founded by ${seksendort.members} in ${seksendort.formed}. Their first album,${seksendort.albums[0].name}
    was released in ${seksendort.albums[0].released}.`
console.log(bandInfo);    


function Cat(name,color,breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.greeting = function() {
        console.log(`Hello,said ${this.name} the ${this.breed}`);
    }
}

const cat1 = new Cat('Bertie','white','Cymric');
const cat2 = new Cat('Elfie','ginger','Aphrodite Giant');


/*-----------------------------------------------------------------------*/
"JS Function Parameters and Arguments: "

// Function parameters are the names listed in the function definition,
// Function arguments are the real values passed to (and received by) the function.

/* Parameter Rules:
    - JS function definitions do not specify data types for parameters.
    - JS functions do not perform type checking on the passed arguments.
    - JS functions do not check the number of arguments received.
*/

'Default Parameters: '

/* If a function is called with missing arguments (less than declared), the missing
    values are set to undefined.

   Sometimes this is acceptable, but sometimes it is better to assign a default value to 
    the parameter.
*/

/* As an example:
    function myFunction(x,y) {
        if (y === undefined) {
            y = 2;
        }
    }

    Instead of the above, we can use:

    function myFunction(x,y = 2) {
        // function code
    }
*/


'The Arguments Object: '

/*
    JS functions have a built-in object called the arguments object.
    The argument object contains an array of the arguments used when the 
      function was called (invoked).
    This way you can simply use a function to find (for instance) the highest 
      value in a list of numbers: EX:
*/

let x = findMax(1,123,333,115,33,55);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
// console.log(x);


x = sumAll(1,123,500,115,44,88);

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
// If a function is called with too many arguments (more than declared), 
//  these arguments can be reached using the arguments object.
// console.log(x);


"ARGUMENTS ARE PASSED BY VALUE: "
/*  
    The parameters, in a function call, are the function's arguments.
    JS arguments are passed by value: The function only gets to know the values, not the
    argument's locations.

    If a function changes an argument's value, it does not change the parameter's original
    value.

    Changes to arguments are not visible (reflected) outside function
*/


"OBJECTS ARE PASSED BY REFERENCE: "
/*
    In JS, object references are values.
    Because of this, objects will behave like they are passed by reference:
    
    If a function changes an object property, it changes the original value.

    Changes to objects properties are visible (reflected) outside the function.
*/

function myFunction(firstN,lastN) {
    this.firstName = firstN;
    this.lastName = lastN;
    this.sayHello = function() {
        console.log(`Hello! My name is ${this.firstName} ${this.lastName}`);
    };
}
ahmetObject = new myFunction('Ahmed','Acar');
console.log(ahmetObject.sayHello());








