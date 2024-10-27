"use strict";
//* Basic Function Declaration:
function greet(name) {
    console.log(`Hello ${name} !`);
}
greet("Alice");
//* Function with Return Type:
function add(a, b) {
    return a + b;
}
let result = add(5, 7);
//* Optional Parameters:
function greetingOptional(name, lastName) {
    if (lastName) {
        console.log(`Hello ${name} ${lastName} !`);
    }
    else {
        console.log(`Hello ${name} !`);
    }
}
greetingOptional("Alice"); // Output: Hello, Alice!
greetingOptional("Bob", "Smith"); // Output: Hello, Bob Smith!
//* Default Parameters:
function greetDefault(name, lastName = "Doe") {
    console.log(`Hello ${name} ${lastName} !`);
}
greetDefault("Alice"); // Output: Hello, Alice Doe!
greetDefault("Bob", "Smith"); // Output: Hello, Bob Smith!
//* Rest Parameters:
function sumNumbers(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
let resultOfSum = sumNumbers(1, 2, 3, 4, 5); // result will be 15
