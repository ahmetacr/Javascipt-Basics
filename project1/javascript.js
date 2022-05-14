let message;
message = 'Hello';
//alert(message); // shows the variable content like print in python 

let user1 = "ahmet", age = 25, message1 = "hello"; // this works but not recommended!

let user2 = "neo";
let age2 = 25;
let message2 = "hello-motherfuckers";

let message3 = "whatsup my nigga";
//alert(message3);

message = 'hello-ahmed!';

//alert(message);

let hello = "hello-world";
let copy;

copy = hello;

//alert(hello);
//alert(copy);



let _ = 1; // _ could be used as a variable 
let $ = 2; // $ could also be used as a variable 

//alert($ + _);


const myBirthday = "01.04.1997";
// myBirthday = "01.02.2001"; This script won't work bc it is a constant!

const COLOR_RED = "F00";
const COLOR_GREEN = "0F0";
const COLOR_BLUE = "00F";
const COLOR_ORANGE = "FF7F00"; 
// The names are in all capital letters bc the values are always the same!
// But if we have a pageLoadTime for example, it changes when you reload! 
//  but it is still a constant since it stays the same after you reload!



let color = COLOR_ORANGE;
//alert(color); 


let admin;
let name;

name = "John";
admin = name;
//alert(admin)

//////////////////////////////////////////////

let x = 100 + 50;
//alert(x);

let a  = 100;
let b  = 50;
let zx = a + b;
//alert(zx);

let d = (200 - 50) * a;
//alert(d);

//alert("AHMED")

let q = 5;
let w = 2; 
let e =  q/w;
//alert(e);

// Kalan bulma %

let bolunen = 5;
let bolen = 2;
let kalan = bolunen % bolen; 
//alert(kalan);


let ahmet = 5; 
ahmet++; // incrementing diyorlar 
ahmet++; // 1 ekliyor 
let zc = ahmet;
//alert(zc);

let said = 10;
said--; // decramenting
zv = said;
//alert(zv);

let uzeri = 5;
let uzerindeki = uzeri ** 5; 
//alert(uzerindeki); 

//Usttekiyle alttaki ayni 
let same_uzeri = 10;
let same_uzerindeki = Math.pow(same_uzeri,3);
//alert(same_uzerindeki);


let decimals = 3.14; // A number w decimals;
let no_decimal = 3;

//Extra large numbers use e feature!

let ex_large = 123e5; // 12300000
let ex_small = 123e-5; // 0.00123

// Integers (numbers without a period or exponent notation) ae accurate
        // up to 15 digits

let xx_large = 999999999999999;
//alert(xx_large);

let xxx_large = 9999999999999999; // will be 100000000000000000
//alert(xxx_large);


let arithmetic = 0.2 + 0.1;
//alert(arithmetic); // does not work good!

let arithmetic_true = (0.2 * 10 + 0.1 *10) /10;
//alert(arithmetic_true)


// Concatenation
let ahmed = "ahmed ";
let saidu = "saidu";
let my_name = ahmed + saidu;
//alert(my_name);

let toblam = "The Result is:" + zx;
//alert(toblam);


let stringg = "100";
let string_2 = "10";

let adding = stringg * string_2;
//alert(adding);
// String + string oldugu zaman calismiyor fakat ikisi de string icinde
//  integersa carpma ve bolme yapabiliyor!

//alert(isNaN(x = 100 / "apple")); // true cikacak cunku integer degil!

let nann = NaN;
let numeric = "5";
let topplam = nann * numeric;
//alert(topplam); // NaN 


//alert(typeof(10+6)); //number

//alert(10/-0); -infinity

let myNumber = 2;
// Execute until infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    //alert(myNumber);
}


//alert(typeof(Infinity)); // number

myNumber = 32;
//alert(myNumber.toString(16)); //Hexadecimal function

aaaa =  new Number(32); //object yapiyor number i ama isi yavaslatiyor!

//alert(myNumber == aaaa); // Esittir e bakiyor yani true!
//alert(myNumber === aaaa); // Datatypelarina bakiyor yani biri obje olsa false

const myInt = 5;
const myFloat = 6.667;

//alert(myInt);
//alert(myFloat);
//alert(typeof(myInt) + typeof(myFloat)); // both numbers!

const lotsOfDecimal = 1.7665465423165454;
//alert(lotsOfDecimal);
//alert(lotsOfDecimal.toFixed(1)); //toFixed(1) 1.inci basamagi yuvarliyor!

let myNumberr = "74";
//alert(typeof(myNumberr));
myNumberr = Number(myNumberr); // Changes string to integer(number)
//alert(typeof(myNumberr));
//alert(myNumberr + 4);


//alert(8 ** (1/3)); // cubic root

//alert(6 - "2"); //converts '2' to a number

//alert('6' / '2'); //converts two of them to numbers

// Unary + : No effect on numbers but effect the non-numbers!
let no_effect =1;
//alert( +no_effect); // 1

//alert( +true); //1
//alert( +""); //0
//alert( +false); // 0 


let apples = "7";
let oranges = "11";
//alert(apples + oranges); // 711
//alert(+apples + +oranges); // 18 
//alert(Number(apples) - Number(oranges)); // -4"


let a1 = 1;
let b1 = 2; 

let c1 = 3 - (a1 = b1 + 1); // a nin degeri update oluyor burada b + 1 olarak yani 3 oluyor!

// alert(a1); // 3 
// alert(c1); // 0

let j,k,l;
j = k = l =  2 + 4;
//alert(j);
//alert(k);
//alert(l); They are all 6 

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// alert( n ); // 14


let counter = 2; 
// counter++;
// alert(counter); // 3
// counter++;
// alert(counter); // 4 // It will only work for the variables but not for the numbers theirselves. 

counter = 3 ;
let ahned = 6;
counter += ahned; 
//alert(counter); // 9 
counter += ahned; 
//alert(counter) ; // 15


counter = 5; 
//let ahmmed = ++counter; // (*)

// alert(ahmmed); // 6 


let ahmmed = counter++; // 5 yani calismiyor gibi gozukuyor fakat 
                            // calisiyormus ama eski degeri donduruyormus tam anlayamadim. 
// alert(ahmmed);

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

b = 1;
b++; // 1 ekliyor 
++b; // 1 ekliyor 
// alert(b); // 3 

//---------------------------------------------------------------------------//

let naaame = "John"
// alert(`Hello, ${naaame}!`); //Pythondaki gibi disardaki bir seyi boyle iceri
                            // alabiliyorsun fakat '' veya "" kullanamazsin
                            // `` kullanman gerekiyor!


let isGreater = 4 > 1; 

// alert(isGreater); // True!


let agee = null; //Means unknown or empty
// alert(agee)

let ageee;
//alert(ageee); // Undifined 



//typeof undefined // "undefined"
//
//typeof 0 // "number"
//
//typeof 10n // "bigint"
//
//typeof true // "boolean"
//
//typeof "foo" // "string"
//
//typeof Symbol("id") // "symbol"
//
//typeof Math // "object"  (1)
//
//typeof null // "object"  (2)
//
//typeof alert // "function"  (3)                                         

const bigmouth = 'I\'ve got no right to take my place...';
const smallmounth = 'I\'ve git no right to take my plaece...';

//alert('I\'ve git no right to take my plaece...'); // I've diyince tirnak kapanmasin diye I\'ve deniyor

const one = `Hello, `;
const two = "How are you doing tonight?";
const joined = `${one}${two}`;
// console.log(joined);
// alert(joined);


nummera = 123;
// alert(typeof(nummera));
nummera = nummera.toString();
// alert(typeof(nummera));











