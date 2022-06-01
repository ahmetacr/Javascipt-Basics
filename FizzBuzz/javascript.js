let answer = parseInt(prompt("Plase enter a number you would like to FizzBuzz up to: "));

// console.log(typeof(answer));
// Create a function for remainers!

let multiples = (number) => {
    if ((number % 15) == 0) {
        return "FizzBuzz";
    } else if ((number % 3) == 0) {
        return "Fizz";
    } else if ((number % 5) == 0) {
        return "Buzz";
    } else {
        return number;
    }
}
// console.log(multiples(10));

// Just print out the numbers!
for (let i = 1; i <= answer; i++) {
    console.log(multiples(i));
    //console.table(multiples(i));
    //console.trace(multiples(i));
}
