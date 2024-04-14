console.log("==========================Part 1: Fizz Buzz===================================")
// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

// using for loop to loop all numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} : Fizz Buzz`);
    } else if (i % 5 === 0) {
        console.log(`${i} : Buzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} : Fizz`);
    } else {
        console.log(`${i} : Neither`)
    }
}

console.log("==========================Part 2: Prime Time===================================")
/**
 * Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.
 */
// let our arbitary number be 15.
let n = 15;
// let our next prime number be i. we start with n+1 because we are looking for prime number after n, in the case n is already a prime number.
for (let i = n + 1; ; i++) {
    let isPrime = true // let us suppose that number is prime.
    // as all number are obviously divisible by 1 , we start looping from 2 as long as j < i or until i-1.
    for (let j = 2; j < i; j++) {
        // if i is divisible by j , it's not prime
        if (i % j === 0) {
            isPrime = false;// set isPrime to false
            break; // break the loop
        }
    }
    // if i is still prime 
    if (isPrime === true) {
        // print the next prime number
        console.log(`The next prime number after ${n} is ${i}.`);
        break; // as soon as we find the next prime number, we break, else it goes to infinite loop.
    }
}

console.log("========================== Part 3: Feeling Loopy ===================================")

let providedCsvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Let us start by splitting given string into rows
let rows = providedCsvString.split("\n");

// Now loop through each row
for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    //console.log(row);
    // Now let's split row into cells using comma separator.
    let cells = row.split(",");
    //console.log(cells)
    //console.log(typeof cells);
    
    // Now we can easily get data from each cell 
    let cell1 = cells[0];
    let cell2 = cells[1];
    let cell3 = cells[2];
    let cell4 = cells[3];

    // log each row of data
    console.log(cell1, cell2, cell3, cell4)
}
