" LENGTH FUNCTION!"
let txt = "ABCASKAJSHDKLJSAHDKJH"
let length = txt.length;
// console.log(length)  // 21
// console.log("ahmet".length); // 5 

"EXTRACTING STRING TYPES!"
// We have the slice() function
".slice()"

let str = "Apple, Banana, Kiwi";
let part = str.slice(7,13);
// alert(part); // Banana

// alert(str.slice(6)); //6 dan basliyor ve sona kadar gidiyor. Yani Banana, Kiwi donuyor.

// alert(str.slice(-6)) // - 6 dan basliyor ve sona kadar gidiyor yani , kiwi donuyor.


// We have the substring() function
".substring()"


// alert(str.substring(7,13)); // banana

// It is similar to the slice function but if you have a negative number it counts as zero here

// alert(str.substring(-6)); // Apple, Banana, Kiwi yani the whole bc it started from 0


//And now we have the substr() function
// The difference is that the second parameter specifies the length of the extracted part.
".substr()" // The first parameter it takes is the starting point and the other is length

// alert(str.substr(7,13)); // Banana, Kiwi // The length is 13 and started from 7.th letter

// alert(str.substr(4)); // start from 4 and goes on!

// alert(str.substr(-6)); // ,kiwi // starts from -6 and goes on!


let text = "Ahmed Said Acar";
// alert(text); // Ahmed Said Acar
text = text.replace("Ahmed", "Ahmet");
// alert(text); // Ahmet Said Acar

text = "Ahmed Said Ahmed Acar";
// alert(text);
// text = text.replace(/AhmeD/i, "Ahmet"); // Bu sekilde yazinca buyuk harf kucuk harf durumu 
                                        //  sorun olmuyor
// alert(text);

// alert(text.replace(/Ahmed/g, "Ahmet")); // Onune gelen butun Ahmedleri Ahmet yapiyor!!!

"LOWER CASE AND UPPER CASE!"

// alert(text.toUpperCase());

// alert(text.toLowerCase());


". concat()"

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2); // Birlestiriyor

// alert(text3);


".trim()"

text1 = "                         Hello World                    ";
// alert(text1);
// alert(text1.trim()) //Boslugu kaldiriyor. 

text = "5";
// alert(text);
let padded = text.padEnd(4,"x");
// alert(padded);

text1 = "A"; // Single letter olmak zorunda!
padded1 = text1.padStart(4,"x");
// alert(padded1);

// alert(text1.padStart(5,"A"))

text = "HELLO WORLD";
let char = text.charCodeAt(0);
// alert(char);

char = text[0]; // Returns H
// alert(char);

listem = text.split(" ");
// alert(typeof(listem));
// alert(listem);

// alert(text.split("")); // H,E,L,L,O,W,O,R,L,D

// alert("Seni seviyorum dedim ama beni anlamadin duygularimla oynadin beni biraktin\
// sensiz yasamak inan cok zor geliyor bana. Dj akman\
//             ")   // Buy using the "\" we can go to the next line! 


//---------------------------------------------------------------------------------------//
"COMPARISONS!"
// alert('a' > 'b'); // False
// alert('a' < 'b'); // True

// alert("ahmed" > "ahmet"); // False cunku d t den once geliyor!

// alert(1 !== 1); false
let a 
// alert( a == a);

// alert('Bee' > 'Be');

"Comparison of different types"

// alert("2" > 1); // True bc it converts "2" to number 2
// alert('01' == 1); // True bc it converts '01' to number 1

// For boolean valus, true becomes 1 and false becomes 0. 
// For example, 
// alert( true == 1); // True
// alert( false == 0); // True

// == check is not capable of differentiating 0 from false!

// alert(0 == false); // True
// alert('' == false); // True

// But the === is capable!

// alert(0 === false); // Returns false because the types of the objects are different!

// It also works for the null and undefined!

// alert(null == undefined); // True
// alert(null === undefined); // False
























