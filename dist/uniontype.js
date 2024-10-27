"use strict";
// Basic Example:
let val;
val = 20;
val = "twenty";
//* Real-world Use Cases: (Function Parameters:)
const greetings = (name) => {
    if (typeof name === 'string') {
        console.log(`Hello, ${name}!`);
    }
    else {
        console.log(`Welcome, user ${name}`);
    }
};
greetings("Alice");
greetings(12);
let user = { name: 'Alice', email: 'alice@example.com' };
